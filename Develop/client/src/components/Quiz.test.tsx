
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Quiz from './Quiz';

describe('Quiz Component', () => {
  it('renders quiz component', () => {
    render(<Quiz />);
    expect(screen.getByTestId('quiz-component')).toBeInTheDocument();
  });

  it('loads questions', async () => {
    render(<Quiz />);
    const question = await screen.findByTestId('question-text');
    expect(question).toBeInTheDocument();
  });

  it('handles answer selection', async () => {
    render(<Quiz />);
    const answer = await screen.findByTestId('answer-option-0');
    fireEvent.click(answer);
    expect(answer).toHaveAttribute('aria-checked', 'true');
  });

  it('shows score after submission', async () => {
    render(<Quiz />);
    const submitButton = await screen.findByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    const score = await screen.findByTestId('score-display');
    expect(score).toBeInTheDocument();
  });
});