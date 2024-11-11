export function deleteUserCookie() {
  document.cookie = "userName=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
}
