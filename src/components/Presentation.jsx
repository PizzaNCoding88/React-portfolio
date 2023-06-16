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
      <section className="h-screen">
        <div className="w-4/5 mx-auto flex justify-center flex-col h-full ">
          <div className="sm:border-8 sm:border-secondary sm:p-8 sm:rounded-2xl sm:animate-fadeIn">
            <h1 className="text-secondary text-center  font-bold text-2xl sm:text-4xl font-LibreFranklin ">
              Building the web that I like
            </h1>
            <h2 className=" text-slate-300 opacity-90 text-center mt-12 font-extralight italic sm:text-xl">
              Umberto Nardiello
            </h2>
            <motion.img
              src="/assets/avatar.jpeg"
              alt="avatar"
              className=" rounded-3xl mt-12 sm:w-[25rem] mr-8 sm:mx-auto"
              variants={avatarVariants}
              initial="hidden"
              animate={controls}
              ref={ref}
            ></motion.img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;
