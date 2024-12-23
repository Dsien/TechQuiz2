import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Quiz from '../../../../components/Quiz';
import App from './App';

describe('Quiz Component', () => {
  it('renders quiz component', () => {
    render(<Quiz />);
    expect(screen.getByTestId('quiz-component')).toBeInTheDocument();
  });

  it('loads questions from API', async () => {
    render(<Quiz />);
    const question = await screen.findByTestId('question-text');
    expect(question).toBeInTheDocument();
  });
});

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  it('renders quiz component', () => {
    const { container } = render(<App />);
    expect(container.querySelector('[data-testid="quiz-component"]')).toBeInTheDocument();
  });

  it('displays header', () => {
    render(<App />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});