import React, { useContext } from "react";
import { ModalContext } from "../../contexts/modal";
import { Transition } from "@headlessui/react";
import Button from "./Button";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";

const Modal: React.FC = () => {
  const modal = useContext(ModalContext);

  const handleButtonClick = () => {
    modal.closeModal();
    modal.props.buttonAction();
  };

  return (
    <Transition
      show={modal.visible}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="absolute top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-blueGray-400 dark:bg-blueGray-900 bg-opacity-30 dark:bg-opacity-40"
    >
      <div
        className={
          "flex flex-col space-y-6 w-sm items-start p-4 rounded-xl w-3/4 md:w-1/4 bg-lightBackground dark:bg-darkBackground ring-1 ring-blueGray-900 dark:ring-blueGray-700 dark:ring-offset-blueGray-700 ring-opacity-5"
        }
      >
        <div className="flex items-start space-x-4">
          <div className="bg-blueGray-300 dark:bg-blueGray-600 p-2 rounded-full">
            {modal.props.success && <CheckCircleIcon className="h-7" />}
            {modal.props.info && <InformationCircleIcon className="h-7" />}
            {modal.props.warning && <ExclamationIcon className="h-7" />}
            {modal.props.error && <ExclamationCircleIcon className="h-7" />}
          </div>
          <div>
            <h3 className="font-semibold text-md">{modal.props.title}</h3>
            <p className="text-sm">{modal.props.message}</p>
          </div>
        </div>
        <div className="flex space-x-2 justify-end w-full">
          <Button buttonText="Cancel" onClick={() => modal.closeModal()} />
          <Button
            buttonText="Sign out"
            variant="outlined"
            red
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </Transition>
  );
};

export default Modal;
