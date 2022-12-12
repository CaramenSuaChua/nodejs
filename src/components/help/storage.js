import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

// cookie
export const getCookieStorage = (key) => Cookies.get(key);

///local
export const getLocalStorage = (key) => localStorage.getItem(key);

export const setOneCookieStorage = (key, data) => {
  const domain = process.env.REACT_APP_COOKIE_DOMAIN || '';
  Cookies.set(key, typeof data === 'object' ? JSON.stringify(data) : data, { domain });
};

export const setAllCookieStorage = (data) =>
  data.forEach((item) => {
    setOneCookieStorage(item.key, item.value);
  });

export const setOneLocalStorage = (key, data) => {
  const domain = process.env.REACT_APP_LOCALSTORAGE_DOMAIN || '';
  localStorage.set(key, JSON.stringify(data));
};

export const setAllLocalStorage = (data) => {
  data.forEach((item) => {
    setOneLocalStorage(item.key, item.value);
  });
};

export const removeOneCookieStorage = (key) => {
  const domain = process.env.REACT_APP_COOKIE_DOMAIN || '';
  Cookies.remove(key, { domain });
};

export const removeAllCookieStorage = (data) => data.forEach((item) => removeOneCookieStorage(item));

export const setTokenCookie = (access_token, refresh_token) => {
  try {
    var tokenDecoded = jwt_decode(access_token);
    // console.log(tokenDecoded)
    var refreshTokenDecoded = jwt_decode(refresh_token);
    // console.log(refreshTokenDecoded)
    var expToken = tokenDecoded.exp ? parseFloat(tokenDecoded.exp) * 1000 : 0;
    // console.log(expToken)
    var expRefreshToken = refreshTokenDecoded.exp ? parseFloat(refreshTokenDecoded.exp) * 1000 : 0;

    setAllCookieStorage([
      { key: 'access_token', value: access_token },
      { key: 'refresh_token', value: refresh_token },
      { key: 'expire_refresh_token', value: expRefreshToken },
      { key: 'expire_token', value: expToken },
    ]);
  } catch (error) {
    // console.log(error)
  }
};

export const removeTokenCookie = (access_token) => {
  removeAllCookieStorage([{ key: 'access_token', value: access_token }]);
};
