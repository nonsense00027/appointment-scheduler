import React, { FC } from "react";

interface IPlusIconProps {}

const PlusIcon: FC<IPlusIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      className="h-7"
    >
      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </svg>
  );
};

export default PlusIcon;