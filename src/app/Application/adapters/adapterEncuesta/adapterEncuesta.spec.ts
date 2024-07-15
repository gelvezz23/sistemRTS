import { AdapterEncuesta } from './index';

describe('AdapterEncuesta', () => {
  it('should adapt the answers correctly', () => {
    const answers = [
      { id: 1, value: 'Answer 1', question: 'Question 1' },
      { id: 2, value: 'Answer 2', question: 'Question 2' },
    ];

    const token = 'user-123';

    const expectedAdaptedAnswers = [
      {
        userId: 'user-123',
        questionId: '1',
        question: 'Question 1',
        userAnswer: 'Answer 1',
      },
      {
        userId: 'user-123',
        questionId: '2',
        question: 'Question 2',
        userAnswer: 'Answer 2',
      },
    ];

    const adaptedAnswers = AdapterEncuesta(answers, token);

    expect(adaptedAnswers).toEqual(expectedAdaptedAnswers);
  });

  it('should return an empty array when no answers are provided', () => {
    const answers: { id: number; value: string; question: string }[] = [];
    const token = 'user-123';

    const adaptedAnswers = AdapterEncuesta(answers, token);

    expect(adaptedAnswers).toEqual([]);
  });

  it('should handle answers with different token values', () => {
    const answers = [
      { id: 1, value: 'Answer 1', question: 'Question 1' },
      { id: 2, value: 'Answer 2', question: 'Question 2' },
    ];

    const token = 'user-456';

    const expectedAdaptedAnswers = [
      {
        userId: 'user-456',
        questionId: '1',
        question: 'Question 1',
        userAnswer: 'Answer 1',
      },
      {
        userId: 'user-456',
        questionId: '2',
        question: 'Question 2',
        userAnswer: 'Answer 2',
      },
    ];

    const adaptedAnswers = AdapterEncuesta(answers, token);

    expect(adaptedAnswers).toEqual(expectedAdaptedAnswers);
  });

  it('should correctly adapt answers with string ids', () => {
    const answers = [
      { id: 3, value: 'Answer 3', question: 'Question 3' },
      { id: 4, value: 'Answer 4', question: 'Question 4' },
    ];

    const token = 'user-789';

    const expectedAdaptedAnswers = [
      {
        userId: 'user-789',
        questionId: '3',
        question: 'Question 3',
        userAnswer: 'Answer 3',
      },
      {
        userId: 'user-789',
        questionId: '4',
        question: 'Question 4',
        userAnswer: 'Answer 4',
      },
    ];

    const adaptedAnswers = AdapterEncuesta(answers, token);

    expect(adaptedAnswers).toEqual(expectedAdaptedAnswers);
  });
});
