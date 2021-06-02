import Link from "next/link";
import React from "react";
import { classNames } from "../../helpers/classNames";

interface Props {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  active?: boolean;
  href: string;
  onClick?: (event) => void;
}

const ListTile: React.FC<Props> = ({
  Icon,
  text,
  active = false,
  href,
  onClick,
}) => {
  return (
    <Link href={href}>
      <a
        onClick={onClick}
        className={classNames(
          active
            ? "text-accent border border-accent"
            : "border-blueGray-200 dark:border-blueGray-600 dark:border-opacity-50",
          "flex items-center p-3 bg-blueGray-100 dark:bg-blueGray-700 hover:bg-opacity-60 dark:hover:bg-opacity-60 border active:bg-blueGray-100 dark:active:bg-blueGray-700 hover:shadow-md dark:hover:shadow-md rounded-xl shadow space-x-2 w-full focus:outline-none"
        )}
      >
        <Icon className="h-5" />
        <h4 className="font-semibold text-md">{text}</h4>
      </a>
    </Link>
  );
};

export default ListTile;
