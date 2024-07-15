interface Answer {
  error: boolean;
  quest: string;
  id: number;
  value: string;
}

interface AdaptedAnswer {
  userId: string;
  questionId: string;
  question: string;
  userAnswer: string;
}

export const InfoDosAdapter = (
  answers: {
    titular: Answer;
    negocio: Answer;
    trabajadores: Answer;
  }[],
  token: string
): AdaptedAnswer[] => {
  const adaptedArray: AdaptedAnswer[] = [];

  answers.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      const answer = obj[key as keyof typeof obj];
      const newObj: AdaptedAnswer = {
        userId: token,
        questionId: answer.id.toString(),
        question: answer.quest,
        userAnswer: answer.value,
      };
      adaptedArray.push(newObj);
    });
  });

  return adaptedArray;
};
