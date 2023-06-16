import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const scrollBtnVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", scrollBtnVisibility);

    return () => {
      window.removeEventListener("scroll", scrollBtnVisibility);
    };
  }, []);
  return (
    <>
      {showButton && (
        <a href="#" className="opacity-90">
          <motion.div
            className="fixed right-1 bottom-1 md:right-8 md:bottom-8 bg-slate-900 rounded-full border-2 p-1 md:p-1 border-secondary animate-bounce 
          "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <MdKeyboardDoubleArrowUp className="text-secondary text-xs md:text-2xl" />
          </motion.div>
        </a>
      )}
      <NavBar />
      <HeroSection />
      <Presentation />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
