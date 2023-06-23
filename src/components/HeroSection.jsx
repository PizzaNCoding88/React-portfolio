import { RxCaretDown } from "react-icons/rx";
import "../../src/index.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  // const frontend = new SplitType("#frontend");
  // const app = useRef();
  // const webDev = new SplitType("#webdev");
  // const name = useRef();

  // useLayoutEffect(() => {
  //   gsap.from(frontend.chars, {
  //     y: -100,
  //     opacity: 1,
  //     stagger: 0.2,
  //     duration: 0.5,
  //   });
  //   gsap.from(webDev.chars, {
  //     y: 100,
  //     opacity: 1,
  //     stagger: 0.2,
  //     duration: 0.5,
  //   });
  //   gsap.from(name.current, { opacity: 0, duration: 2 });
  // });

  // const frontend = new SplitType("#frontend", { types: "words, chars" });
  // const webDev = new SplitType("#webdev", { types: "words, chars" });
  // const name = useRef();

  // useLayoutEffect(() => {
  //   gsap.from(frontend.chars, {
  //     y: -100,
  //     opacity: 1,
  //     stagger: 0.2,
  //     duration: 0.5,
  //   });
  //   gsap.from(webDev.chars, {
  //     y: 100,
  //     opacity: 1,
  //     stagger: 0.2,
  //     duration: 0.5,
  //   });
  //   gsap.to(name.current, { opacity: 1, duration: 2 });
  // });

  const name = useRef();
  const frontend = "Frontend";
  const webDev = "Web Dev";

  useEffect(() => {
    // let textAnimation = gsap.timeline();

    gsap.fromTo(name.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 4 });
    gsap.fromTo(
      ".hero",
      { autoAlpha: 0, y: -100 },
      {
        autoAlpha: 1,
        y: 0,
        ease: "power4.Out",
        stagger: { each: 0.05 },
      }
    );
    gsap.fromTo(
      ".hero1",
      { autoAlpha: 0, y: 100 },
      {
        autoAlpha: 1,
        y: 0,
        ease: "power4.Out",
        stagger: { each: 0.05 },
      }
    );
  }, []);

  return (
    <>
      <div className="h-[calc(100vh-5.25rem)] flex justify-center items-center font-Ubuntu relative">
        <div className='before:content-["UN"] before:text-[13rem] before:text-[#0d0d0d] before:absolute before:top-[50%] before:left-[50%] before:-translate-x-1/2 before:-translate-y-1/2 before:font-bold before:z-0 before:drop-shadow-xl before:blur-[1px] before:[text-shadow:_0_0_40px_rgb(235,89,57)] before:animate-glow sm:before:text-[20rem] before:font-SecondaryF'></div>
        <div className="w-4/5 z-20 flex justify-center items-center ">
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
          <h1
            className="text-center text-5xl xl:text-6xl uppercase leading-10 font-bold text-secondary drop-shadow-2xl tracking-wide md:tracking-wider name xl:tracking-widest"
            ref={name}
          >
            Umberto
          </h1>
          {webDev.split("").map((letter, i) => {
            return letter === " " ? (
              <div key={i} className="hero1">
                {" "}
                &nbsp;{" "}
              </div>
            ) : (
              <div
                key={i}
                className="text-left mb-20 text-secondary font-bold text-xl sm:mb-32 font-PrimaryF md:text-3xl lg:text-4xl xl:text-5xl  hero1"
              >
                {letter}
              </div>
            );
          })}
        </div>
        <RxCaretDown className=" absolute bottom-0 text-secondary animate-bounce text-2xl " />
      </div>
    </>
  );
};

export default HeroSection;
