import { MenuIcon } from "@heroicons/react/solid";
import React, { useContext } from "react";
import IconButton from "./shared/IconButton";
import Logo from "../public/sailtrack-logo.svg";
import Avatar from "./shared/Avatar";
import ThemePicker from "./ThemePicker";
import CheckButton from "./CheckButton";
import { MainContext } from "../contexts/main";
import { useGetUser } from "../helpers/useRequest";
import NotificationDrawer from "./NotificationDrawer";

const Header = () => {
  const mainState = useContext(MainContext);
  const { data } = useGetUser();

  return (
    <header className="sticky pl-5 pr-7 flex items-center bg-lightBackground dark:bg-darkBackground shadow-md w-screen h-20 justify-between z-50">
      <div className="flex items-center w-52 space-x-3">
        <IconButton
          Icon={MenuIcon}
          onClick={() => mainState.setSideDrawer(!mainState.sideDrawer)}
        />
        <Logo className="fill-current text-lightFont dark:text-accent" />
      </div>
      <div className="flex items-center space-x-3">
        <div className="hidden sm:flex space-x-3">
          <CheckButton />
          <ThemePicker />
        </div>
        <NotificationDrawer />
        <Avatar
          src={
            data &&
            (data.picture ||
              "https://firebasestorage.googleapis.com/v0/b/sailtrack-pwa-af986.appspot.com/o/avatar.png?alt=media&token=5dba1d3f-5694-49fa-a2fd-7b19258154a6")
          }
        />
      </div>
    </header>
  );
};

export default Header;
