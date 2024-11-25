import Cookies from 'js-cookie';

const getCookie = (name: string) => {
  return Cookies.get(name);
};
const setCookie = (name: string, data: string) => {
  Cookies.set(name, data);
};
const clearCookie = (name: string) => {
  Cookies.remove(name);
};

export { getCookie, setCookie, clearCookie };
