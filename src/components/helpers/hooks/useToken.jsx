import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const clearToken = (userToken) => {
    window.localStorage.removeItem('token');
    setToken(null);
  };

  return {
    setToken: saveToken,
    clearToken,
    token,
  };
}
