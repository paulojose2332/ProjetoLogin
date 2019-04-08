const jsonwebtoken = require("jsonwebtoken");
export function isLogged(login) {
  const { token, user, expiration } = login;
  if (token) {
    const decodedToken = jsonwebtoken.decode(token, { complete: true });
    if (
      decodedToken &&
      new Date(expiration) > new Date().getTime() &&
      user &&
      decodedToken.payload[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
      ] === user.id
    ) {
      return true;
    }
  }
  return false;
}
