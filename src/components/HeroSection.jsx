import { RxCaretDown } from "react-icons/rx";
import "../../src/index.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const name = useRef();
  const frontend = "Frontend";
  const webDev = "Web Dev";

  useEffect(() => {
    gsap.fromTo(name.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 5 });
    gsap.fromTo(
      ".hero",
      { autoAlpha: 0, y: -100 },
      {
        autoAlpha: 1,
        y: 0,
        ease: "power4.Out",
        stagger: { each: 0.15 },
      }
    );
    gsap.fromTo(
      ".hero1",
      { autoAlpha: 0, y: 100 },
      {
        autoAlpha: 1,
        y: 0,
        ease: "power4.Out",
        stagger: { each: 0.15 },
      }
    );
  }, []);

  return (
    <>
      <div className="h-[calc(100vh-5.25rem)] flex justify-center items-center font-Ubuntu relative">
        <div className="hero-section"></div>
        <div className="w-4/5 z-20 flex justify-center items-center relative">
          <div className="absolute flex justify-center items-center -left-4 mb-4 sm:mb-16 lg:mb-32 clip1">
            {frontend.split("").map((letter, i) => {
              return letter === " " ? (
                <div key={i} className="hero">
                  {" "}
                  &nbsp;{" "}
                </div>
              ) : (
                <div
                  key={i}
                  className="text-left mb-48 text-secondary font-bold text-xl sm:mb-60 font-PrimaryF md:text-3xl lg:text-4xl xl:text-5xl  hero"
                >
                  {letter}
                </div>
              );
            })}
          </div>

          <h1
            className="text-center text-5xl xl:text-6xl uppercase leading-10 font-bold text-secondary drop-shadow-2xl tracking-wide md:tracking-wider name xl:tracking-widest"
            ref={name}
          >
            Umberto
          </h1>

          <div className="absolute flex justify-center items-center -right-4 mt-4 sm:mt-16 lg:mt-32 clip1 ">
            {webDev.split("").map((letter, i) => {
              return letter === " " ? (
                <div key={i} className="hero1">
                  {" "}
                  &nbsp;{" "}
                </div>
              ) : (
                <div
                  key={i}
                  className="text-left mt-48 text-secondary font-bold text-xl sm:mt-60 font-PrimaryF md:text-3xl lg:text-4xl xl:text-5xl  hero1"
                >
                  {letter}
                </div>
              );
            })}
          </div>
        </div>
        <RxCaretDown className=" absolute bottom-4 text-secondary animate-bounce text-2xl lg:text-5xl " />
      </div>
    </>
  );
};

export default HeroSection;
