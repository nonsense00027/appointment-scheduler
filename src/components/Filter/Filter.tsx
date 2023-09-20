import { FC, useState } from "react";

interface IFilterProps {}

const Filter: FC<IFilterProps> = () => {
  const [show, setShow] = useState("all");
  const [start, setStart] = useState("2023-07-22");
  const [end, setEnd] = useState("2023-12-25");

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
          value={start}
          onChange={(e) => setStart(e.target.value)}
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
          value={end}
          onChange={(e) => setEnd(e.target.value)}
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
