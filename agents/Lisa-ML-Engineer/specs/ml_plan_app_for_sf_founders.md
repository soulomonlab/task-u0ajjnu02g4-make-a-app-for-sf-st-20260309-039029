Title: ML Plan — App for SF Founders

Overview
--------
This document defines the proposed ML scope, architecture options, data requirements, evaluation plan, and next steps to support the "App for SF founders" MVP. It’s intended to unblock data collection and to give the frontend/backend teams a clear contract for model inputs/outputs.

Situation
---------
- Product team delivered an MVP product spec (output/specs/app_for_sf_founders.md) and design work is assigned to Maya.
- The team requires ML readiness (what models/features we will provide, what data is needed, and how to evaluate) before full implementation.

Complication
------------
- Designers and frontend need ML output shapes and latency guarantees to build UX.
- Data team must extract and clean relevant datasets; lack of a concrete data spec blocks model development.

Recommended Resolution (summary)
--------------------------------
1) Prioritize two MVP ML features: (A) Founder–Investor Recommendation (semantic matching + business rules) and (B) Pitch-quality Scoring (NLP classifier + explainability).
2) Start data collection for both features (see Data Requirements section). Request: Samantha to prepare labeled/derived datasets and register them in DVC/S3.
3) Target lightweight models that meet production constraints: p95 latency <50ms, training <4 hours on a single GPU for baseline.

Scope & Prioritization
----------------------
- MVP Feature A (High priority): Founder–Investor Recommendation
  - Input: founder profile (text fields: elevator pitch, sector tags, stage, location), investor profile (text bio, sectors, check size), historical match events.
  - Output: ranked top-5 investor suggestions with similarity score and top-3 explainability tokens (for UI tooltips).
  - Approach: embeddings-based semantic retrieval (SentenceTransformers) + lightweight ranking model (XGBoost/LightGBM) that uses behavioral features.
  - Why: Good hit rate with low ops cost; retrieval + scoring maintains low latency.

- MVP Feature B (Medium priority): Pitch-quality Scoring
  - Input: pitch deck text (extracted OCR/slide text) and short pitch summary.
  - Output: numeric quality score (0–100), binary pass/fail for quick flagging, and 2–3 short suggestions (via template mapping or small generation model).
  - Approach: fine-tune a small transformer (DistilBERT) classifier or use prompting + heuristic scoring if labeled data limited.
  - Why: Provides immediate value for founders; requires labeled dataset or proxy labels.

Architecture & Serving
----------------------
- Model types: embeddings (SentenceTransformers), small transformer classifier (DistilBERT) for scoring, gradient-boosted tree for ranker.
- Serving: expose model endpoints via Marcus' backend (contract below). Use BentoML or TorchServe for model packaging. Keep model under 200MB (quantize if needed).
- Latency target: real-time <50ms p95 per request for recommendation scoring and pitch scoring requests (use batching for throughput).
- Versioning: MLflow for experiment tracking + model artifact registry. DVC for dataset versioning.

API Contract (for backend/frontend alignment)
---------------------------------------------
- Recommendation endpoint (POST /api/v1/ml/recommend)
  - Input JSON: { "founder_profile": {"text": "...", "tags": [...], "stage": "seed"}, "top_k": 5 }
  - Output JSON: { "recommendations": [{"investor_id": "inv_123", "score": 0.87, "explain_tokens": ["SaaS","B2B"]}, ...] }

- Pitch scoring endpoint (POST /api/v1/ml/pitch_score)
  - Input JSON: { "pitch_text": "...", "slides_text": ["..."], "language": "en" }
  - Output JSON: { "score": 78, "pass": true, "highlights": ["market size weak","team strong"] }

Data Requirements (Samantha — action items)
------------------------------------------
Please prepare the following datasets, anonymized and registered in DVC under a new project path (suggested s3 prefix below):

A) Recommendation training dataset
  - Files: matches.csv, investors.csv, founders.csv
  - Schema highlights:
    - matches.csv: {match_id, founder_id, investor_id, event_type (applied/contacted/accepted), timestamp}
    - founders.csv: {founder_id, name_hash, description, tags[], stage, location}
    - investors.csv: {investor_id, name_hash, bio, sectors[], check_size_range}
  - Size target: >= 5k historical match events (positive) + sampled negatives (non-interacted pairs)
  - Anonymization: replace PII with stable hashes; keep sector and stage fields intact.

B) Pitch scoring dataset
  - Files: pitches.csv
  - Schema highlights: {pitch_id, founder_id, pitch_text, slides_text (optional), label_quality (0-100 or categorical), label_source (manual/heuristic)}
  - Size target: >= 2k labeled pitch samples. If manual labels unavailable, provide proxy labels (e.g., investor feedback, funding outcome) with documentation.

C) Sample payloads & data quality checks
  - Provide 100 sample founder profiles and 100 investor profiles as JSON for rapid prototyping.
  - Provide basic data quality report: missing rates by column, unique counts for categorical features, top-10 sectors.

Suggested storage & access
-------------------------
- Upload raw CSV/JSON to s3://company-data/app_founders/raw/
- Register cleaned DVC dataset under data/app_founders/{recommendation,pitch_scoring}/
- Provide read credentials to the ML team or create a temporary presigned S3 path.

Evaluation & Acceptance Criteria
--------------------------------
- Recommendation: Top-5 precision >= 40% on a held-out test set or business baseline (if no baseline, improve over random by X). Measure recall@5 and MAP.
- Pitch scoring: F1 >= 0.75 for pass/fail binary classifier OR correlation r >= 0.5 with human scores if regression.
- Operational: inference p95 latency <50ms, training baseline <4 hours on single GPU.

Monitoring & Retrain Strategy
-----------------------------
- Track daily inference metrics (top-k accuracy, distribution of scores). Implement drift detection for input embeddings (KL divergence) and alert if distribution shift >5%.
- Retrain trigger: validation metric drop >5% absolute compared to production baseline.

Timeline (proposed)
-------------------
- Week 0: Data pull + sample payloads from Samantha
- Week 1: Baseline models (embeddings + simple ranking, DistilBERT heuristic) delivered for shadow testing
- Week 2: Model iteration, evaluation, MLflow runs logged
- Week 3: Packaging + model handoff for serving (Marcus/Noah)

Risks & Mitigations
-------------------
- Low label counts for pitch scoring -> use proxy labels and active learning; collect human labels gradually via a simple labelling UI.
- PII sensitivity -> enforce hashing and ask legal if needed.

Next steps (explicit asks)
-------------------------
1) Samantha (#ai-data): Extract and register datasets A and B (see Data Requirements). Provide DVC paths and 100 sample payloads by EOD+3 business days.
2) I (ML/AI Engineer): On receipt of data, I'll build baseline training scripts (output/code/ml/train_baselines.py) and open MLflow runs.
3) Marcus (#ai-backend): Once baseline models are ready, we’ll coordinate endpoint contracts and serving approach.

Document version: 2026-03-09
