export const formatedResponse = (input: any) => {
  const regex: RegExp = /\D/g;
  return input.replace(regex, '');
};
