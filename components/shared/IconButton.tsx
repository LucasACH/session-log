import React from "react";

interface Props {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}

const IconButton: React.FC<Props> = ({ Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-blueGray-100 dark:hover:bg-blueGray-700 rounded-full focus:outline-none"
    >
      <Icon className="h-7" />
    </button>
  );
};

export default IconButton;
