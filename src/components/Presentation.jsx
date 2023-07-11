import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <>
      <section className="h-screen">
        <div className="w-[75%] mx-auto flex justify-center flex-col h-full">
          <div className="sm:border-8 sm:border-secondary sm:p-8 sm:rounded-2xl sm:animate-fadeIn">
            <h1 className="text-secondary text-center  font-bold text-xl sm:text-2xl font-PrimaryF ">
              Building Experiences, Crafting Connections
            </h1>
            <h2 className=" text-slate-300 opacity-90 text-center mt-12 font-extralight italic sm:text-xl font-SingatureF lg:text-2xl">
              Umberto Nardiello
            </h2>
            <motion.img
              src="/assets/avatar.webp"
              alt="avatar"
              className="rounded-3xl mt-12 sm:w-[25rem] mr-8 sm:mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            ></motion.img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;
