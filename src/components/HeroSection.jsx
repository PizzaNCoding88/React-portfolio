import { RxCaretDown } from "react-icons/rx";
import "../../src/index.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";

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
        ease: CustomEase.create(
          "custom",
          "M0,0,C0,0,0.136,-0.039,0.21,-0.049,0.228,-0.052,0.245,-0.046,0.262,-0.038,0.28,-0.03,0.295,-0.02,0.31,-0.005,0.332,0.019,0.347,0.041,0.365,0.072,0.387,0.113,0.398,0.141,0.415,0.186,0.437,0.248,0.447,0.285,0.465,0.35,0.506,0.508,0.522,0.599,0.565,0.754,0.578,0.802,0.589,0.831,0.61,0.876,0.626,0.913,0.637,0.937,0.66,0.968,0.676,0.992,0.697,1.082,0.72,1.098,0.739,1.111,0.756,1.14,0.78,1.144,0.797,1.146,0.871,1.104,0.89,1.1,0.95,1.054,1,1,1,1"
        ),
        stagger: { each: 0.15 },
      }
    );
    gsap.fromTo(
      ".hero1",
      { autoAlpha: 0, y: 100 },
      {
        autoAlpha: 1,
        y: 0,
        ease: CustomEase.create(
          "custom",
          "M0,0,C0,0,0.136,-0.039,0.21,-0.049,0.228,-0.052,0.245,-0.046,0.262,-0.038,0.28,-0.03,0.295,-0.02,0.31,-0.005,0.332,0.019,0.347,0.041,0.365,0.072,0.387,0.113,0.398,0.141,0.415,0.186,0.437,0.248,0.447,0.285,0.465,0.35,0.506,0.508,0.522,0.599,0.565,0.754,0.578,0.802,0.589,0.831,0.61,0.876,0.626,0.913,0.637,0.937,0.66,0.968,0.676,0.992,0.697,1.082,0.72,1.098,0.739,1.111,0.756,1.14,0.78,1.144,0.797,1.146,0.871,1.104,0.89,1.1,0.95,1.054,1,1,1,1"
        ),
        stagger: { each: 0.15 },
      }
    );
  }, []);

  return (
    <>
      <div className="h-[calc(100dvh-5.25rem)] flexy relative">
        <div className="hero-section"></div>
        <div className="w-4/5 z-20 flexy relative">
          <div className="absolute flexy -left-4 mb-4 sm:mb-16 lg:mb-32 clip1">
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

          <div className="absolute flexy -right-4 mt-4 sm:mt-16 lg:mt-32 clip1 ">
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
