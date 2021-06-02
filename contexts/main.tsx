import React, { createContext, useState } from "react";

interface MainContext {
  sideDrawer: boolean;
  setSideDrawer?: (state: boolean) => void;
}

const contextDefaultValues: MainContext = {
  sideDrawer: false,
};

export const MainContext = createContext<MainContext>(contextDefaultValues);

const MainProvider: React.FC = ({ children }) => {
  const [sideDrawer, setSideDrawer] = useState<boolean>(
    contextDefaultValues.sideDrawer
  );

  return (
    <MainContext.Provider value={{ sideDrawer, setSideDrawer }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
