import React, { useContext } from "react";
import {
  ChartBarIcon,
  CogIcon,
  HomeIcon,
  PhoneIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
import ListTile from "./shared/ListTile";
import ProfileTile from "./ProfileTile";
import Button from "./shared/Button";
import { classNames } from "../helpers/classNames";
import { MainContext } from "../contexts/main";
import { useRouter } from "next/router";
import { AuthContext } from "../contexts/auth";
import { ModalContext } from "../contexts/modal";

const SideDrawer: React.FC = () => {
  const mainState = useContext(MainContext);
  const auth = useContext(AuthContext);
  const router = useRouter();
  const route = router.route;
  const modal = useContext(ModalContext);

  const navigationLayout = [
    {
      text: "Overview",
      icon: HomeIcon,
      route: "/dashboard",
    },
    {
      text: "Analytics",
      icon: ChartBarIcon,
      route: "/dashboard/analytics",
    },
    {
      text: "Users",
      icon: UserGroupIcon,
      route: "/dashboard/users",
    },
    {
      text: "Account",
      icon: UserCircleIcon,
      route: "/dashboard/account",
    },
    {
      text: "Settings",
      icon: CogIcon,
      route: "/dashboard/settings",
    },
  ];

  return (
    <div
      className={classNames(
        mainState.sideDrawer && "w-full",
        "absolute top-0 h-full z-40"
      )}
    >
      <div
        className={classNames(
          mainState.sideDrawer ? "left-7" : "-left-80",
          "absolute flex flex-col top-28 bottom-8 w-72 rounded-xl bg-lightBackground dark:bg-darkBackground ring-1 ring-blueGray-900 dark:ring-blueGray-700 dark:ring-offset-blueGray-700 ring-opacity-5 shadow-lg space-y-3 py-3 transform duration-300 z-40"
        )}
      >
        <div className="px-3 space-y-2">
          <ProfileTile />
          <Button
            buttonText="Sign out"
            Prefix={LogoutIcon}
            fullWidth
            onClick={() =>
              modal.showModal({
                title: "Sign out?",
                message:
                  "You can always access your content by signing back in",
                buttonText: "Sign out",
                warning: true,
                buttonAction: auth.signOut,
              })
            }
          />
        </div>
        <hr className="text-blueGray-200 dark:text-blueGray-700" />
        <div className="flex flex-col space-y-3 px-3 flex-auto">
          {navigationLayout.map((tile, index) => (
            <ListTile
              key={index}
              href={tile.route}
              Icon={tile.icon}
              text={tile.text}
              active={route === tile.route}
              onClick={() => mainState.setSideDrawer(false)}
            />
          ))}
        </div>
        <div className="px-3">
          <Button
            buttonText="CALL FOR HELP"
            variant="outlined"
            Prefix={PhoneIcon}
            red
            fullWidth
          />
        </div>
      </div>
      <div
        onClick={() => mainState.setSideDrawer(false)}
        className={classNames(
          mainState.sideDrawer && "bg-blueGray-400 dark:bg-blueGray-900",
          "w-full h-full bg-opacity-30 dark:bg-opacity-40 transform duration-300"
        )}
      ></div>
    </div>
  );
};

export default SideDrawer;
