export function setUserCookie(userName: string, days = 7) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `userName=${encodeURIComponent(
    userName
  )}; expires=${expires.toUTCString()}; path=/;`;
}
