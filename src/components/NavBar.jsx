import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        <div className=" font-NotoSerif font-semibold text-secondary text-3xl">
          UN
        </div>
        <div>
          <ul className="sm:flex flex-row justify-between items-center gap-8 text-xl font-Ubuntu text-secondary font-bold hidden ">
            <a href="#home" className="group/home">
              <li>Home</li>
            </a>
            <a href="#projects" className=" group-hover/home:after-">
              <li>Projects</li>
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

          <AnimatePresence>
            {sidebarOpen && (
              <>
                <motion.div
                  className="h-screen w-screen bg-primary opacity-90 absolute top-0 left-0 bottom-0 z-30"
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  onClick={handleSidebarClose}
                ></motion.div>

                <motion.div
                  key="navbar"
                  initial={{ x: "200%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{
                    x: "200%",
                    opacity: 0,
                    transition: { duration: 0.2 },
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="w-4/5 h-screen absolute flex justify-center items-center top-0 right-0 z-40 bg-gradient-to-r from-primary to-[#222222] shadow-nav-shadow font-NotoSerif"
                >
                  <RxCross2
                    className="absolute top-4 left-4 text-secondary text-xl cursor-pointer font-bold"
                    onClick={handleSidebarClose}
                  />
                  <ul className="flex flex-col justify-between items-center gap-16 text-xl font-Ubuntu text-secondary font-bold">
                    <a href="#home" onClick={handleSidebarClose}>
                      <li>Home</li>
                    </a>
                    <a href="#projects" onClick={handleSidebarClose}>
                      <li>Projects</li>
                    </a>
                    <a href="#contact" onClick={handleSidebarClose}>
                      <li>Contact</li>
                    </a>
                  </ul>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
