import "./App.css";
import Header from "./components/Header";
import Appointments from "./components/Appointments/Appointments";
import PlusIcon from "./assets/icons/PlusIcon";

function App() {
  return (
    <div className="relative">
      <main className="relative container mx-auto px-4 pt-24 pb-12 lg:px-0">
        <div className="flex flex-col gap-2 lg:gap-0">
          <Appointments qty={3} />
          <div className="separator" />
          <Appointments qty={1} />
          <div className="separator" />
          <Appointments qty={1} />
          <div className="separator" />
          <Appointments qty={4} />
        </div>
      </main>
      <div className="fixed bottom-8 right-8 lg:bottom-20 lg:right-20">
        {/* <p className="absolute bottom-20 text-xs bg-white border rounded-full px-4 py-1 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-out">
              Create Appointment
            </p> */}
        <div className="relative w-16 h-16 bg-blue-600 border-white border rounded-full grid place-content-center shadow-md cursor-pointer hover:bg-blue-700 hover:scale-110 has-transition">
          <PlusIcon />
        </div>
      </div>
      <Header />
    </div>
  );
}

export default App;
