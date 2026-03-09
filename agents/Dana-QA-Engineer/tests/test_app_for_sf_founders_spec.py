import pathlib

SPEC_PATH = pathlib.Path('output/specs/app_for_sf_founders.md')


def test_spec_file_exists():
    assert SPEC_PATH.exists(), f"Spec file not found at {SPEC_PATH}"


def test_acceptance_criteria_present():
    content = SPEC_PATH.read_text(encoding='utf-8')
    assert 'A user can sign up and complete onboarding in < 3 minutes' in content
    assert 'A user can browse and bookmark curated resources' in content
    assert 'A user can view and request a connection with matched founders' in content


def test_core_capabilities_listed():
    content = SPEC_PATH.read_text(encoding='utf-8')
    assert 'Onboarding flow capturing role, stage, needs' in content
    assert 'Founder Network & Matchmaking' in content
    assert 'Events & Office Hours calendar' in content


def test_performance_and_scalability_slas():
    content = SPEC_PATH.read_text(encoding='utf-8')
    assert 'Core API responses under 300ms 95th percentile' in content
    assert 'System supports 5k concurrent users' in content


def test_edge_cases_documented():
    content = SPEC_PATH.read_text(encoding='utf-8')
    assert 'Duplicate accounts handled' in content
    assert 'User who opts out of matchmaking must not be shown as matchable' in content
