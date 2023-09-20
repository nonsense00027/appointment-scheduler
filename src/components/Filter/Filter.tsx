import React, { FC, useState } from "react";

interface IFilterProps {}

const Filter: FC<IFilterProps> = () => {
  const [show, setShow] = useState("all");

  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <div className="flex flex-col gap-2 items-center md:flex-row">
        <label htmlFor="start" className="text-sm">
          From:
        </label>
        <input
          className="border px-2 py-1 rounded-md"
          type="date"
          id="start"
          name="appointment-start"
          value="2023-07-22"
          min="2018-01-01"
          max="2023-12-31"
        />
      </div>

      <div className="flex flex-col gap-2 items-center md:flex-row">
        <label htmlFor="end" className="text-sm">
          To:
        </label>
        <input
          className="border px-2 py-1 rounded-md"
          type="date"
          id="end"
          name="appointment-end"
          value="2023-07-22"
          min="2018-01-01"
          max="2023-12-31"
        />
      </div>

      <div>
        <button
          className={`${
            show === "all" ? "bg-blue-600 text-white" : "border text-black"
          } w-28 py-1 rounded-l-md transition-all duration-150 ease-out`}
          onClick={() => setShow("all")}
        >
          Show All
        </button>
        <button
          className={`${
            show === "mine" ? "bg-blue-600 text-white" : "border text-black"
          } w-28 py-1 rounded-r-md transition-all duration-150 ease-out`}
          onClick={() => setShow("mine")}
        >
          Show Mine
        </button>
      </div>
    </div>
  );
};

export default Filter;
