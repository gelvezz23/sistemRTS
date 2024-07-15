interface AdaptedAnswer {
  userId: string;
  questionId: string;
  question: string;
  userAnswer: string;
}

export const AdapterFormTresAnswer = (
  answers: { id: number; value: string; text: string }[],
  token: string
): AdaptedAnswer[] => {
  return answers.map((answer) => ({
    userId: token,
    questionId: answer.id.toString(),
    question: answer.text,
    userAnswer: answer.value,
  }));
};
