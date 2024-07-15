import sign from 'jwt-encode';
export const adapterToken = (token: string) => {
  const secret = 'SECRET';
  const data = {
    sub: '1234567890',
    token: token.slice(-20),
    iat: 1516239022,
  };
  const jwt = sign(data, secret);
  return jwt;
};
