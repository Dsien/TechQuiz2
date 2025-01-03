
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  it('renders quiz component', () => {
    const { container } = render(<App />);
    expect(container.querySelector('[data-testid="quiz-component"]')).toBeInTheDocument();
  });
});