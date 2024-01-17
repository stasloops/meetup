export const checkToken = (token: any) => {
  const parsed = token.split('.');
  if (parsed.length === 3) {
    const data = JSON.parse(atob(parsed[1]));
    const email = data.email;

    const expiredDate = new Date(data.exp * 1000);

    return { email, expiredDate, expired: new Date() > expiredDate };
  }
  return undefined;
};
