import React, { createContext, useState } from "react";

interface Snackbar {
  title: string;
  message: string;
  error?: boolean;
  warning?: boolean;
  info?: boolean;
  success?: boolean;
}

interface SnackbarContext {
  visible: boolean;
  props: Snackbar;
  showSnackbar?: (obj: Snackbar) => void;
  hideSnackbar?: () => void;
}

const contextDefaultValues: SnackbarContext = {
  visible: false,
  props: { message: "", title: "" },
};

export const SnackbarContext =
  createContext<SnackbarContext>(contextDefaultValues);

const SnackbarProvider: React.FC = ({ children }) => {
  const [snackbarTimeout, setSnackbarTimeout] = useState<NodeJS.Timeout>(null);
  const duration: number = 5000;

  const [visible, setVisible] = useState<boolean>(contextDefaultValues.visible);
  const [props, setProps] = useState<Snackbar>(contextDefaultValues.props);

  const showSnackbar = (props: Snackbar) => {
    setProps({
      title: props.title,
      message: props.message,
      error: props.error,
      warning: props.warning,
      info: props.info,
      success: props.success,
    });

    setVisible(true);

    return setSnackbarTimeout(
      setTimeout(() => {
        setVisible(false);
      }, duration)
    );
  };

  const hideSnackbar = () => {
    setVisible(false);
    clearTimeout(snackbarTimeout);
  };

  return (
    <SnackbarContext.Provider
      value={{ visible, props, showSnackbar, hideSnackbar }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
