export type QuestionType = {
  id: number;
  question: string;
  value: string;
  disabled?: boolean;
  content: string;
  checkedYes: boolean | string;
  checkedNo: boolean | string;
  checkedNose?: boolean | string;
  required: boolean;
  error: boolean;
};
