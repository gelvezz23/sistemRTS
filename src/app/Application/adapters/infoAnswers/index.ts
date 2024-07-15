export const InfoAdapter = (
  answers: { id: number; quest: string; value: string }[],
  token: string
) => {
  const adaptedArray: {
    userId: string;
    questionId: string;
    question: string;
    userAnswer: string;
  }[] = [];
  answers.forEach((obj) => {
    const newObj = {
      userId: token,
      questionId: obj.id.toString(),
      question: obj.quest,
      userAnswer: obj.value,
    };
    adaptedArray.push(newObj);
  });

  return adaptedArray;
};
