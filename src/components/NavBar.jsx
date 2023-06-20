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
    <nav className="bg-gradient-to-r from-primary to-[#222222]" id="home">
      <div className="flex justify-between items-center w-4/5 py-6 mx-auto">
        <div className=" font-Sanchez text-secondary text-3xl">UN</div>
        <div>
          <ul className="sm:flex flex-row justify-between items-center gap-8 text-xl font-LibreFranklin text-secondary font-bold hidden ">
            {/* <a href="#home" className="relative group/home">
              <li className="before:w-0 before:h-1 before:absolute before:-bottom-3 before:rounded-md before:bg-secondary group-hover/home:before:w-full before:transition-all before:duration-300 hover:opacity-90 transition-opacity duration-300">
                Home
              </li>
            </a> */}
            <li className="before:w-0 before:h-1 before:absolute before:-bottom-3 before:rounded-md before:bg-secondary hover:before:w-full before:transition-all before:duration-300 hover:opacity-90 transition-opacity duration-300">
              <a href="#home" className="relative">
                Home
              </a>
            </li>
            <a href="#projects" className="relative group/projects">
              <li className="before:w-0 before:h-1 before:absolute before:-bottom-3 before:rounded-md before:bg-secondary group-hover/projects:before:w-full before:transition-all before:duration-300  hover:opacity-90 transition-opacity duration-300">
                Projects
              </li>
            </a>
            <a
              href="#contact"
              className="rounded-md px-3.5 py-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-secondary text-secondary "
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-secondary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-secondary transition duration-300 group-hover:text-white ease">
                Contact
              </span>
            </a>
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
            className={`h-screen absolute flex justify-center items-center top-0 right-0 z-40 bg-gradient-to-r from-primary to-[#222222] shadow-nav-shadow font-Sanchez ${
              sidebarOpen ? "w-4/5" : "w-0"
            } transition-all ease-in-out duration-500 overflow-x-hidden `}
          >
            <RxCross2
              className="absolute top-4 left-4 text-secondary text-xl cursor-pointer font-bold"
              onClick={handleSidebarClose}
            />
            <ul
              className={`flex flex-col justify-between items-center gap-16 text-xl font-Sanchez text-secondary font-bold `}
            >
              <a
                href="#home"
                onClick={handleSidebarClose}
                className={`${
                  sidebarOpen ? "translate-x-0" : "translate-x-48"
                } transition-all duration-500`}
              >
                <li>Home</li>
              </a>
              <a
                href="#projects"
                onClick={handleSidebarClose}
                className={`${
                  sidebarOpen ? "translate-x-0" : "translate-x-48"
                } transition-all duration-500 delay-100`}
              >
                <li>Projects</li>
              </a>
              <a
                href="#contact"
                onClick={handleSidebarClose}
                className={`${
                  sidebarOpen ? "translate-x-0" : "translate-x-48"
                } transition-all duration-700 delay-200`}
              >
                <li>Contact</li>
              </a>
            </ul>
          </div>
          {/* </> */}
          {/* )} */}

          {/* --------------------- */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
