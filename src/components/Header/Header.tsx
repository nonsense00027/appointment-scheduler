import { FC, useState } from "react";
import MenuIcon from "../../assets/icons/MenuIcon";
import Filter from "../Filter/Filter";
import CloseIcon from "../../assets/icons/CloseIcon";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <header className="fixed top-0 left-0 bg-white h-16 w-screen border-b shadow-sm px-4">
      <div className="h-full flex container mx-auto justify-between items-center">
        <h1 className="font-semibold text-2xl">Encounters</h1>
        <div className="md:hidden">
          <button onClick={() => setShowFilter(true)}>
            <MenuIcon />
          </button>
        </div>
        <div className="hidden md:block">
          <Filter />
        </div>
      </div>

      {/* MOBILE FILTER SIDEBAR */}
      <aside
        className={`fixed z-50 w-[280px] h-screen right-0 top-0 bg-white border-l shadow-md ${
          showFilter ? "translate-x-0" : "translate-x-[300px]"
        }  has-transition`}
      >
        <div className="h-16 flex items-center justify-end px-4">
          <button onClick={() => setShowFilter(false)}>
            <CloseIcon />
          </button>
        </div>
        <Filter />
      </aside>
    </header>
  );
};

export default Header;
