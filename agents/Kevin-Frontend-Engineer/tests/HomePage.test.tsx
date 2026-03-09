import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders title, subtitle and CTA', () => {
    render(<HomePage title="Test Title" subtitle="Test subtitle" ctaText="Start" />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test subtitle')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Start/i })).toBeInTheDocument();
  });

  it('calls onCtaClick when CTA clicked', () => {
    const handler = jest.fn();
    render(<HomePage onCtaClick={handler} ctaText="Go" />);

    fireEvent.click(screen.getByRole('button', { name: /Go/i }));
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
