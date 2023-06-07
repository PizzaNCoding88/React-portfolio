import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const avatarVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.5 },
};

const Presentation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-[#222222] h-screen">
        <div className="w-4/5 mx-auto flex justify-center flex-col h-full">
          <h1 className="text-secondary text-center text-2xl font-bold">
            Building the web my way
          </h1>
          <h2 className=" text-slate-400 opacity-90 text-center mt-12 font-extralight">
            Umberto Nardiello
          </h2>
          <motion.img
            src="/assets/avatar.jpeg"
            alt="avatar"
            className=" rounded-3xl mt-12"
            variants={avatarVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
          ></motion.img>
        </div>
      </section>
    </>
  );
};

export default Presentation;
