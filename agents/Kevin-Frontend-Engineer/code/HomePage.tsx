import React from 'react';

interface HomePageProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HomePage: React.FC<HomePageProps> = ({
  title = "Built for SF founders",
  subtitle = "Discover events, build connections, and grow your startup",
  ctaText = "Get started",
  onCtaClick,
}) => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onCtaClick}
            className="px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700"
          >
            {ctaText}
          </button>
          <button
            onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
            className="px-6 py-3 rounded-md bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50"
          >
            Learn more
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
