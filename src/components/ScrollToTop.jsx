import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop = () => {
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
        <a href="#" className="opacity-90 fixed right-3 bottom-3 z-10">
          <div className="md:right-8 md:bottom-8 bg-transparent rounded-full border-2 p-1 md:p-1 border-secondary">
            <MdKeyboardDoubleArrowUp className="text-secondary text-lg md:text-2xl" />
          </div>
        </a>
      )}
    </>
  );
};

export default ScrollToTop;
