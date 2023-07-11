import { RxCaretDown } from "react-icons/rx";
import "../../src/index.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  const frontend = "Frontend";
  const webDev = "Web Dev";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const lettersFront = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const lettersWeb = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="h-[calc(100dvh-5.25rem)] flexy relative">
        <div className="hero-section"></div>
        <div className="w-4/5 z-20 flexy relative">
          <motion.h3
            className="absolute flexy -left-4 mb-4 sm:mb-16 lg:mb-32 clip1"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {frontend.split("").map((char, index) => {
              return (
                <motion.span
                  key={index}
                  variants={lettersFront}
                  className="text-left mb-48 text-secondary font-bold text-xl sm:mb-60 font-PrimaryF md:text-3xl lg:text-4xl xl:text-5xl hero "
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h3>

          <motion.h1
            className="text-center text-5xl xl:text-6xl uppercase leading-10 font-bold text-secondary drop-shadow-2xl tracking-wide md:tracking-wider xl:tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Umberto
          </motion.h1>

          <motion.h3
            className="absolute flexy -right-4 mt-4 sm:mt-16 lg:mt-32 clip1 "
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {webDev.split("").map((char, index) => {
              return (
                <motion.span
                  key={index}
                  className="text-left mt-48 text-secondary font-bold text-xl sm:mt-60 font-PrimaryF md:text-3xl lg:text-4xl xl:text-5xl  hero1"
                  variants={lettersWeb}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h3>
        </div>
        <RxCaretDown className=" absolute bottom-4 text-secondary animate-bounce text-2xl lg:text-5xl " />
      </div>
    </>
  );
};

export default HeroSection;
