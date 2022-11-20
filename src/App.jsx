import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import Navbar from "./components/Navbar.jsx";
import NavRoutes from "./components/NavRoutes.jsx";
import "./App.css";
import { useEffect } from "react";
import AdminRoutes from "./pages/admin/AdminRoutes.jsx";

function App() {
  const [open, setOpen] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    setOpen(!open);
  };

  const detectSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [width]);

  useEffect(() => {
    if (width < 640) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [width]);

  return (
    <>
    <div className="flex relative">
      <div className="w-14 sm:w-[240px]">
        <div className={`fixed top-0 bottom-0 left-0 ${
            open ? "w-[240px]" : "w-14"
          }  bg-color-base  duration-300 bg-custom`}
        >
          <BsArrowLeftShort
            onClick={handleToggle}
            size={30}
            className={`absolute right-[-10px] top-8 bg-white rounded-full border border-dark-green cursor-pointer ${
              width < 640 ? "invisible" : "visible"
            } ${!open ? "rotate-180" : ""} duration-300 `}
          />
          <Navbar width={width} open={open} />
        </div>
      </div>
      <div>
        <NavRoutes open={open} width={width} />
        <AdminRoutes/>
      </div>  
    </div>

    </>
  );
}

export default App;
