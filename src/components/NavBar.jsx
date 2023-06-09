import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };
  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <nav id="home">
      <div className="flex items-center justify-between w-4/5 py-6 mx-auto">
        <div className=" font-SecondaryF text-secondary text-3xl lg:text-4xl xl:text-4xl">
          <img src="/assets/logo1.svg" className=" lg:h-16"></img>
        </div>
        <div>
          <ul className="sm:flex flex-row justify-between items-center gap-8 text-xl font-PrimaryF text-secondary font-bold hidden">
            <li className="li-desktop">
              <a href="#home">Home</a>
            </li>
            <li className="li-desktop">
              <a href="#projects">Projects</a>
            </li>

            <li
              href="#contact"
              className="rounded-md px-3.5 py-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-secondary text-secondary lg:text-xl xl:text-2xl"
            >
              <span className="absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-secondary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-secondary transition duration-300 group-hover:text-white ease">
                <a href="#contact">Contact</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="sm:hidden">
          <RxHamburgerMenu
            className="text-3xl text-secondary"
            onClick={handleSidebarOpen}
          />

          <div
            className={`h-screen bg-primary opacity-90 absolute top-0 right-0 bottom-0 z-30 ${
              sidebarOpen ? "w-screen" : "w-0"
            } transition-all duration-300 ease-in-out`}
            onClick={handleSidebarClose}
          ></div>

          <div
            className={`h-screen absolute flexy top-0 right-0 z-40 bg-gradient-to-r from-primary to-[#222222] shadow-nav-shadow  font-SecondaryF ${
              sidebarOpen ? "w-4/5" : "w-0"
            } transition-all ease-in-out duration-300 overflow-x-hidden `}
          >
            <RxCross2
              className="absolute top-4 left-4 text-secondary text-xl cursor-pointer font-bold"
              onClick={handleSidebarClose}
            />
            <ul className="flexy flex-col gap-16 text-xl  font-SecondaryF text-secondary font-bold">
              <li
                onClick={handleSidebarClose}
                className={`${
                  sidebarOpen ? "translate-x-0" : "translate-x-48"
                } transition-all duration-500`}
              >
                <a href="#home">Home</a>
              </li>

              <li
                onClick={handleSidebarClose}
                className={`${
                  sidebarOpen ? "translate-x-0" : "translate-x-48"
                } transition-all duration-500 delay-100`}
              >
                <a href="#projects">Projects</a>
              </li>
              <li
                onClick={handleSidebarClose}
                className={`${
                  sidebarOpen ? "translate-x-0" : "translate-x-48"
                } transition-all duration-500 delay-200`}
              >
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
