import { RxCaretDown } from "react-icons/rx";
import "../../src/index.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  const frontend = "Frontend";
  const webDev = "Web Dev";

  return (
    <>
      <div className="h-[calc(100dvh-5.25rem)] flexy relative">
        <div className="hero-section"></div>
        <div className="w-4/5 z-20 flexy relative">
          <motion.div
            className="absolute flexy -left-4 mb-4 sm:mb-16 lg:mb-32 clip1"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.08, delay: 0.5 }}
          >
            {frontend.split("").map((letter, i) => {
              return letter === " " ? (
                <motion.div
                  key={i}
                  className="hero"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {" "}
                  &nbsp;{" "}
                </motion.div>
              ) : (
                <motion.div
                  key={i}
                  className="text-left mb-48 text-secondary font-bold text-xl sm:mb-60 font-PrimaryF md:text-3xl lg:text-4xl xl:text-5xl"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ staggerChildren: 0.5 }}
                >
                  {letter}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.h1
            className="text-center text-5xl xl:text-6xl uppercase leading-10 font-bold text-secondary drop-shadow-2xl tracking-wide md:tracking-wider xl:tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Umberto
          </motion.h1>

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
                  className="text-left mt-48 text-secondary font-bold text-xl sm:mt-60 font-PrimaryF md:text-3xl lg:text-4xl xl:text-5xl"
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
