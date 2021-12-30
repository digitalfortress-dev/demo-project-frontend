import axiosClient from "./axiosClient";

const CachedUser = localStorage.getItem("user-patient");
let User = CachedUser ? JSON.parse(CachedUser) : {};

export const userIsLoggedIn = () => {
  if (Object.keys(User).length) {
    axiosClient.setHeader(User.accessToken);
    return true;
  } else return false;
};

export const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const handleError = (error: any) => {
  if (error.status === 401) {
    window.location.replace("/");
    localStorage.removeItem("user-patient");
    return;
  }
};
