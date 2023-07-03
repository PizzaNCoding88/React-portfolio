import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop = () => {
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
            className="fixed right-3 bottom-3 md:right-8 md:bottom-8 bg-transparent rounded-full border-2 p-1 md:p-1 border-secondary animate-bounce opacity-0"
            ref={upBtn}
          >
            <MdKeyboardDoubleArrowUp className="text-secondary text-lg md:text-2xl" />
          </div>
        </a>
      )}
    </>
  );
};

export default ScrollToTop;
