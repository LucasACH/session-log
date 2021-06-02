import React from "react";
import { classNames } from "../../helpers/classNames";

interface Props {
  buttonText: string;
  variant?: string;
  red?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
  Prefix?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Button: React.FC<Props> = ({
  buttonText,
  variant = "primary",
  red = false,
  onClick,
  fullWidth = false,
  Prefix,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        fullWidth && "w-full",
        variant === "primary" &&
          "bg-blueGray-300 active:bg-blueGray-300 border border-blueGray-400 dark:border-blueGray-500 dark:bg-blueGray-600 dark:active:bg-blueGray-600 hover:bg-opacity-80 hover:shadow-md dark:hover:bg-opacity-80",
        variant === "outlined" &&
          (red
            ? "border-error text-error bg-error border bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-10"
            : "border-accent text-accent bg-accent border bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-10"),

        "flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium shadow-sm focus:outline-none"
      )}
    >
      {Prefix && <Prefix className="h-4" />}
      <p>{buttonText}</p>
    </button>
  );
};

export default Button;
