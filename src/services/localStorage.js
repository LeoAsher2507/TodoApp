export const getAccessToken = () => {
  return localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : '{}';
};

export const setAccessToken = (token) => {
  localStorage.setItem('token', JSON.stringify(token));
};

export const removeAccessToken = (token) => {
  localStorage.removeItem('token');
};
