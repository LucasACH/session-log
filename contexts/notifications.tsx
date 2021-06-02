import React, { createContext } from "react";

interface NotificationsContext {
  notifications?: {
    title: string;
    message: string;
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }[];
}

export const NotificationsContext = createContext<NotificationsContext>(null);

const NotificationsProvider: React.FC = ({ children }) => {
  return (
    <NotificationsContext.Provider value={{}}>
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;
