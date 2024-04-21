export function getUserData() {
  const userData = JSON.parse(localStorage.getItem("user-data"));

  if (!userData) {
    return false;
  }
  if (!userData.isLoggedIn) {
    return false;
  }

  return userData;
}
