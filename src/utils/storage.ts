export const checkDataInLocalStorage = data => {
  if (data === null || data === undefined || data === "null" || data === "undefined") {
    return false;
  }
  return true;
};

export const saveUserInfo = (token, refreshToken, state, userInfo) => {
  const UserInfo = JSON.stringify(userInfo);
  localStorage.setItem("_token", token);
  localStorage.setItem("state", state);
  localStorage.setItem("_refreshToken", refreshToken);
  localStorage.setItem("_currentUser", UserInfo);
};

export const clearUserInfo = () => {
  localStorage.removeItem("_token");
  localStorage.removeItem("_currentUser");
  localStorage.removeItem("urlBeforeLogin");
};

export const saveUsername = username => {
  localStorage.setItem("username_rmb", username);
};

export const clearUsername = () => {
  localStorage.removeItem("username_rmb");
};

export const getToken = () => {
  const token = localStorage.getItem("_token");
  return token;
};

export const getRefreshToken = () => {
  const rfToken = localStorage.getItem("_rfToken");
  return rfToken;
};

export const getTimeExpr = () => {
  const time = localStorage.getItem("_timeExpr");
  return time;
};

export const getUserInfo = () => {
  const userInfo = localStorage.getItem("_currentUser");

  return JSON.parse(userInfo);
};

export const getUsernameRemember = () => {
  const username = localStorage.getItem("username_rmb");
  if (checkDataInLocalStorage(username)) {
    return username;
  }
  return false;
};

export const setToken = token => {
  localStorage.setItem("_token", token);
};

export const setRefeshToken = refeshToken => {
  localStorage.setItem("_refeshToken", refeshToken);
};

export const setRoleInStorage = () => {
  localStorage.setItem("coodrPermision", true);
};

export const getRoleInStorage = () => {
  const per = localStorage.getItem("coodrPermision");
  return per;
};

export const saveTokenStringee = token => {
  localStorage.setItem("_tokenStringee", token);
};

export const getTokenStringee = () => {
  const rkStringee = localStorage.getItem("_tokenStringee");

  return rkStringee;
};
