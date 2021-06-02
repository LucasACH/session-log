import React, { useContext } from "react";
import { SnackbarContext } from "../../contexts/snackbar";
import { Transition } from "@headlessui/react";
import { classNames } from "../../helpers/classNames";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
  XIcon,
} from "@heroicons/react/solid";

const Snackbar: React.FC = () => {
  const snackbar = useContext(SnackbarContext);

  return (
    <Transition
      show={snackbar.visible}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="absolute ml-auto mr-auto bottom-4 left-0 right-0 z-50"
    >
      <div
        className={classNames(
          snackbar.props.success && "bg-success bg-opacity-40 border-success",
          snackbar.props.info &&
            "bg-information bg-opacity-40 border-information",
          snackbar.props.warning && "bg-warning bg-opacity-40 border-warning",
          snackbar.props.error && "bg-error bg-opacity-40 border-error",
          "absolute ml-auto mr-auto bottom-4 left-0 right-0 flex w-sm border items-start p-4 rounded-xl shadow-xl justify-between transform ease-out duration-300 space-x-5 w-4/5 md:w-2/5"
        )}
      >
        <div className="flex items-start space-x-4">
          <div className="bg-lightBackground dark:bg-darkBackground p-2 rounded-full">
            {snackbar.props.success && <CheckCircleIcon className="h-7" />}
            {snackbar.props.info && <InformationCircleIcon className="h-7" />}
            {snackbar.props.warning && <ExclamationIcon className="h-7" />}
            {snackbar.props.error && <ExclamationCircleIcon className="h-7" />}
          </div>
          <div>
            <h3 className="font-semibold text-md">{snackbar.props.title}</h3>
            <p className="text-sm">{snackbar.props.message}</p>
          </div>
        </div>
        <button
          className="rounded-full focus:outline-none"
          onClick={() => snackbar.hideSnackbar()}
        >
          <XIcon className="h-5" />
        </button>
      </div>
    </Transition>
  );
};

export default Snackbar;
