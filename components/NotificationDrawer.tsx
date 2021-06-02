import React from "react";
import { BellIcon, XIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DownloadIcon } from "@heroicons/react/outline";

const notifications: [
  {
    title: string;
    message: string;
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }
] = [
  {
    title: "Download the App",
    message:
      "Get our free app and access data offline. It won´t take up space on your phone.",
    Icon: DownloadIcon,
  },
];

const NotificationDrawer: React.FC = ({}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="relative p-2 hover:bg-blueGray-100 dark:hover:bg-blueGray-700 rounded-full focus:outline-none">
              <BellIcon className="h-7" />
              <div className="absolute top-0 right-0 bg-error rounded-full flex items-center justify-center w-5 h-5 text-blueGray-50 text-xxs font-semibold">
                {notifications.length}
              </div>
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className={
                "right-0 bg-lightBackground dark:bg-darkBackground origin-top-right absolute mt-2 w-96 rounded-md shadow-lg ring-1 ring-blueGray-900 dark:ring-blueGray-700 dark:ring-offset-blueGray-700 ring-opacity-5 focus:outline-none"
              }
            >
              <div className="py-1">
                {notifications.map((notification, index) => (
                  <Menu.Item key={index}>
                    <div
                      className={
                        "flex relative items-start px-4 py-4 space-x-4 text-sm cursor-pointer hover:bg-blueGray-100 dark:hover:bg-blueGray-700"
                      }
                    >
                      <div className="bg-blueGray-200 dark:bg-blueGray-600 p-2 rounded-full">
                        <notification.Icon className="h-7" />
                      </div>
                      <div>
                        <p className="font-semibold text-md">
                          {notification.title}
                        </p>
                        <p className="text-md"> {notification.message}</p>
                      </div>
                      <button className="absolute top-1 right-1 hover:bg-blueGray-300 dark:hover:bg-blueGray-600 rounded-full p-1 focus:outline-none">
                        <XIcon className="h-3" />
                      </button>
                    </div>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default NotificationDrawer;
