import { FC } from "react";

import Appointment from "../Appointment";

interface IAppointmentsProps {
  qty: number;
}

const Appointments: FC<IAppointmentsProps> = ({ qty }) => {
  const getRandomZeroOrOne = () => Math.floor(Math.random() * 2);

  const hasNotes = () => getRandomZeroOrOne() === 1;

  return (
    <section className="flex flex-col gap-2 lg:flex-row">
      <div className="hidden flex-[0.1] bg-white w-64 lg:flex flex-col items-center pt-4 border-2">
        <h1 className="font-bold text-2xl">5</h1>
        <h2 className="font-semibold text-xl">JAN</h2>
        <h4>2023</h4>
      </div>
      <h1 className="font-semibold lg:hidden">January 5, 2023</h1>
      <div className="flex flex-1 overflow-x-scroll gap-2 lg:overflow-hidden lg:flex-wrap lg:py-2">
        {new Array(qty).fill(0).map((_, index) => (
          <Appointment key={index} hasNotes={hasNotes()} />
        ))}
      </div>
    </section>
  );
};

export default Appointments;
