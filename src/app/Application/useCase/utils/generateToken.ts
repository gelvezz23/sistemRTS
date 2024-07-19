export function generateRandomString(length: number) {
  let randomString = '';
  while (randomString.length < length) {
    randomString += Math.random().toString(36).substr(2);
  }
  return randomString.substr(0, length);
}
