import { toast } from "react-toastify";
import { DEFAULT_TIME_AUTO_HIDE_TOASTIFY } from "../constants/appConstants";

const useNotify = () => {
  const error = (message, position = "top-right", autoClose) => {
    toast.error(message, {
      position: position,
      autoClose: autoClose || DEFAULT_TIME_AUTO_HIDE_TOASTIFY,
      hideProgressBar: true,
    });
  };

  const success = (message, position = "top-right", autoClose) => {
    toast.success(message, {
      position: position,
      autoClose: autoClose || DEFAULT_TIME_AUTO_HIDE_TOASTIFY,
      hideProgressBar: true,
    });
  };

  const warning = (message, position = "top-right", autoClose) => {
    toast.warning(message, {
      position: position,
      autoClose: autoClose || DEFAULT_TIME_AUTO_HIDE_TOASTIFY,
      hideProgressBar: true,
    });
  };

  return { error, success, warning };
};

export default useNotify;
