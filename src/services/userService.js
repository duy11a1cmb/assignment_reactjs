import { getRequest } from "../api/apiCaller";

export const getUserInfo = async (params, successCallback, errorCallback) => {
  await getRequest(
    "/api/users",
    params,
    successCallback,
    errorCallback
  );
};
