import data from "../data/projectData";
import { motion } from "framer-motion";
import { LuGithub, LuArrowRight } from "react-icons/lu";

const Projects = () => {
  return (
    <>
      <section className="overflow-x-hidden w-4/5 mx-auto pb-4 " id="projects">
        <h2 className="text-secondary text-xl text-center font-bold mb-8">
          Personal Projects
        </h2>
        <div key="1" className="lg:grid lg:grid-cols-2 lg:grid-rows-6 lg:gap-4">
          {data.map((data) => {
            return (
              <div
                key={data.id}
                className={`w-[90%] mx-auto ${
                  data.id === 1 ? "pt-8" : "mt-8 lg:mt-0"
                } ${
                  data.id === 11 ? "lg:col-span-2" : ""
                } sm:w-9/12 sm:mx-auto shadow-3xl rounded-md p-8 lg:w-[95%] lg:flex lg:justify-center lg:items-center`}
              >
                <a href={data.href} target="_blank" rel="noreferrer">
                  <motion.img
                    src={data.source}
                    alt=""
                    className="w-4/5 mx-auto rounded-md"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 160 },
                    }}
                  ></motion.img>
                  <motion.p
                    className="text-secondary w-4/5 mx-auto uppercase text-center mt-2 font-bold"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -160 },
                    }}
                  >
                    {data.title}
                  </motion.p>
                  <motion.p
                    className="text-secondary w-4/5 mx-auto text-center text-sm mt-4 "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -160 },
                    }}
                  >
                    {data.description}
                  </motion.p>
                  <div className="flex justify-between items-center mt-12 gap-12 px-32">
                    <a
                      href={data.href}
                      className="text-secondary bg-transparent border-2 border-secondary pl-4 pr-[0.75rem] py-1 rounded-lg hover:bg-secondary hover:text-additional
          transition-all duration-300 group"
                    >
                      Go to Site{" "}
                      <LuArrowRight className="text-secondary inline ml-4 pb-[0.15rem] align-middle group-hover:translate-x-2 group-hover:text-white transition-transform duration-300" />
                    </a>
                    <LuGithub className="text-secondary text-lg hover:opacity-80 hover:scale-[1.2] duration-200" />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
