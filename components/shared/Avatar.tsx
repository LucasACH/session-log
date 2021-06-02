import React from "react";

interface Props {
  src: string;
}

const Avatar: React.FC<Props> = ({ src }) => {
  return (
    <img
      className="inline-block h-10 w-10 rounded-full ring-2 ring-blueGray-400 dark:ring-blueGray-500"
      src={src}
      alt=""
    />
  );
};

export default Avatar;
