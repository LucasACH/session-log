import React, { createContext, useEffect, useState } from "react";

interface ThemeContext {
  theme: string;
  changeTheme?: (event: React.ChangeEvent<HTMLButtonElement>) => void;
}

const contextDefaultValues: ThemeContext = {
  theme: "Auto",
};

export const ThemeContext = createContext<ThemeContext>(contextDefaultValues);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<string>(contextDefaultValues.theme);

  const changeTheme = (event: React.ChangeEvent<HTMLButtonElement>) => {
    const theme: string = event.target.innerText;

    window.localStorage.theme = theme.toLowerCase();
    setTheme(theme);
  };

  useEffect(() => {
    const theme: string = window.localStorage.theme;

    switch (theme) {
      case "dark":
        setTheme("Dark");
        document.documentElement.classList.add("dark");
        break;

      case "light":
        setTheme("Light");
        document.documentElement.classList.remove("dark");
        break;

      case "auto":
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        break;

      default:
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
