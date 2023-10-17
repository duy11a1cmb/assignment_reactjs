import { USER } from "../constants/mockData/userData.mock";

const login = (email: string, password: string | number) => {
  return new Promise((resolve, reject) => {
    const emailCorrect = USER.find((user: any) => user.email === email);
    const passWordCorrect = emailCorrect?.password === password;
    if (emailCorrect && passWordCorrect) {
      resolve(emailCorrect);
    } else {
      reject();
    }
  });
};

const logout = () => {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
};

export const userServices = { login, logout };
