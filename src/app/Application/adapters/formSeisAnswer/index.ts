interface Answer {
  id: number;
  quest: string;
  value: string;
  disabled: boolean;
  error: boolean;
}

interface AdaptedAnswer {
  userId: string;
  questionId: string;
  question: string;
  userAnswer: string;
}

export const AdapterFormSeisAnswer = (
  answers: Answer[],
  token: string
): AdaptedAnswer[] => {
  return answers.map((answer) => ({
    userId: token,
    questionId: answer.id.toString(),
    question: answer.quest,
    userAnswer: answer.value,
  }));
};
