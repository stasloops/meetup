export const checkToken = (token) => {
  const splited = token.split('.');
  if (splited.length === 3) {
    const data = JSON.parse(atob(splited[1]));
    const email = data.email;

    const expiredDate = new Date(data.exp * 1000);

    return { email, expiredDate, expired: new Date() > expiredDate };
  }
  return undefined;
};
