import { QuestionType } from '../../../Domain/pages/formulario';

interface Answer extends QuestionType {}

interface AdaptedAnswer {
  userId: string;
  questionId: string;
  question: string;
  userAnswer: string;
}

export const AdapterFormAnswer = (
  answers: Answer[],
  token: string
): AdaptedAnswer[] => {
  return answers.map((answer) => ({
    userId: token,
    questionId: answer.id.toString(),
    question: answer.question,
    userAnswer: answer.value,
  }));
};
