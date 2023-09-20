import React, { FC } from "react";

interface ITimeIconProps {}

const TimeIcon: FC<ITimeIconProps> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5">
      <title>clock-time-eight-outline</title>
      <path d="M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 12.8L7.7 15.6L7 14.2L11 11.9V7H12.5V12.8Z" />
    </svg>
  );
};

export default TimeIcon;
