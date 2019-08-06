const TOKEN_KEY = "@expense-control-Token";
const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
const getToken = () => localStorage.getItem(TOKEN_KEY);
const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  // eslint-disable-next-line
  location.href = "/";
};

export { TOKEN_KEY, isAuthenticated, getToken, login, logout };
