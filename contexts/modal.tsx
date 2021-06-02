import React, { createContext, useState } from "react";

interface Modal {
  title: string;
  message: string;
  buttonText: string;
  buttonAction?: () => void;
  error?: boolean;
  warning?: boolean;
  info?: boolean;
  success?: boolean;
}

interface ModalContext {
  visible: boolean;
  props: Modal;
  showModal?: (obj: Modal) => void;
  closeModal?: () => void;
}

const contextDefaultValues: ModalContext = {
  visible: false,
  props: { message: "", title: "", buttonText: "" },
};

export const ModalContext = createContext<ModalContext>(contextDefaultValues);

const ModalProvider: React.FC = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(contextDefaultValues.visible);
  const [props, setProps] = useState<Modal>(contextDefaultValues.props);

  const showModal = (props: Modal) => {
    setProps({
      title: props.title,
      message: props.message,
      buttonText: props.buttonText,
      buttonAction: props.buttonAction,
      error: props.error,
      warning: props.warning,
      info: props.info,
      success: props.success,
    });

    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{
        visible,
        props,
        showModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
