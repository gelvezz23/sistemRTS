export interface SaveDataResponse {
  success?: boolean; // Optional property
  error?: Error; // Optional property
}

export interface QuestionsProps {
  userId: string;
  questionId: string;
  question: string;
  userAnswer: string;
}
