export function logout() {
  localStorage.removeItem('token');
  console.log('handleError401 401');
  window.location.href = '/';
}
export function getLocalUserData() {
  return JSON.parse(localStorage.getItem('token')!);
}
