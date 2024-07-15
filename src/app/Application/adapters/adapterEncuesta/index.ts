interface AdaptedAnswer {
  userId: string;
  questionId: string;
  question: string;
  userAnswer: string;
}

export const AdapterEncuesta = (
  answers: { id: number; value: string; question: string }[],
  token: string
): AdaptedAnswer[] => {
  return answers.map((answer) => ({
    userId: token,
    questionId: answer.id.toString(),
    question: answer.question,
    userAnswer: answer.value,
  }));
};
