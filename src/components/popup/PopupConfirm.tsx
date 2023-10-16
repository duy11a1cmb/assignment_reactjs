import React, { useContext, useEffect, useState } from "react";
import { Modal } from "antd";
import { ContextProvider } from "../../contexts/ContextProvider";

const PopupConfirm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const popupContext = useContext(ContextProvider);

  useEffect(() => {
    if (popupContext.popup.show) {
      setIsModalVisible(true);
    }
  }, [popupContext]);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      {isModalVisible ? "show" : "hide"}
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{popupContext.popup.text}</p>
      </Modal>
    </div>
  );
};

export default PopupConfirm;
