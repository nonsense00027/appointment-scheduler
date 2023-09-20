import { FC } from "react";

import TimeIcon from "../../assets/icons/TimeIcon";
import NoteIcon from "../../assets/icons/NoteIcon";
import HeartIcon from "../../assets/icons/HeartIcon";
import VerticalDotsIcon from "../../assets/icons/VerticalDotsIcon";

interface IAppointmentProps {
  hasNotes: boolean;
}

const Appointment: FC<IAppointmentProps> = ({ hasNotes }) => {
  return (
    <div className="w-80 flex-shrink-0 bg-white border p-4 shadow-sm rounded-md lg:w-96">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold mb-1">Follow-up with Dr. Kit Calico</h3>
          <p className="flex gap-1 text-sm items-center text-gray-700">
            <TimeIcon /> 5:00PM - 6:30PM
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <HeartIcon />
          <VerticalDotsIcon />
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-left text-gray-700">
          Follow-up on previous test results of the checkup.
        </p>
      </div>

      <button
        className={`rounded-sm w-full py-1 text-sm flex items-center justify-center gap-2 ${
          hasNotes
            ? "bg-white border-blue-600 border hover:border-blue-800"
            : "bg-blue-600 text-white hover:bg-blue-700"
        } has-transition`}
      >
        <NoteIcon color={hasNotes ? "#2663EB" : "white"} />
        {hasNotes ? "View Notes" : "Add Notes"}
      </button>
    </div>
  );
};

export default Appointment;
