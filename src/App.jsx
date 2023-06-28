import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

function App() {
  const [showButton, setShowButton] = useState(false);
  const upBtn = useRef();
  gsap.to(upBtn.current, { autoAlpha: 1, duration: 1.5 });
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
          <div
            className="fixed right-1 bottom-1 md:right-8 md:bottom-8 bg-slate-900 rounded-full border-2 p-1 md:p-1 border-secondary animate-bounce opacity-0"
            ref={upBtn}
          >
            <MdKeyboardDoubleArrowUp className="text-secondary text-xs md:text-2xl" />
          </div>
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
