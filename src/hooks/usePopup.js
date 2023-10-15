import { useContext } from "react";
import { ContextProvider } from "../contexts/ContextProvider";

const usePopup = () => {
  const popupProvider = useContext(ContextProvider);

  const show = (text) => {
    popupProvider.setPopup({ show: true, text: text });
  };

  return { show };
};

export default usePopup;
