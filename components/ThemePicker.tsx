import React, { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import DropdownMenu from "./shared/DropdownMenu";

const ThemePicker: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <DropdownMenu
      value={theme.theme}
      options={["Light", "Dark", "Auto"]}
      position="left"
      onChange={(event) => theme.changeTheme(event)}
    />
  );
};

export default ThemePicker;
