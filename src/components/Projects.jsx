import data from "../data/projectData";
import { motion } from "framer-motion";
import { LuGithub, LuArrowRight } from "react-icons/lu";

const Projects = () => {
  const windowWidth = window.innerWidth;
  return (
    <>
      <section
        className="overflow-x-hidden w-4/5 mx-auto sm:w-full pb-4"
        id="projects"
      >
        <h2 className="text-secondary text-2xl sm:text-4xl text-center font-bold mb-10">
          Personal Projects
        </h2>
        {data.map((data) => {
          return (
            <div
              className={`${data.id % 2 === 0 ? "flex-row-reverse" : ""} ${
                windowWidth < 640 ? "flex-col" : "flex-row"
              } flex gap-4 pb-4 items-center border-1 shadow-3xl md:gap-0 mb-8  md:mb-8 w-4/5 mx-auto md:shadow-projects-shadow rounded-lg overflow-hidden md:pb-0 md:justify-center md:align-middle lg:max-w-[70%]`}
              key={data.id}
            >
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -110 },
                }}
                src={data.source}
                className="w-full sm:w-[50%] sm:h-100% rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
              ></motion.img>
              <motion.div
                className="text-secondary text-center flex flex-col items-center justify-center sm:w-[50%] md:px-8 px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 160 },
                }}
              >
                <p className="uppercase font-bold mb-4 text-md">{data.title}</p>
                <p className="text-sm mb-4 text-slate-300">
                  {data.description}
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  <a href={data.href} target="_blank" rel="noreferrer">
                    <button className="border-2 border-secondary px-4 py-1 rounded-lg group hover:bg-secondary hover:text-additional transition-all duration-300">
                      Link{" "}
                      <LuArrowRight className="text-secondary inline pb-1 group-hover:translate-x-2 group-hover:text-additional transition-all duration-300" />
                    </button>
                  </a>
                  <a href={data.repo} target="_blank" rel="noreferrer">
                    <button className="border-2 border-secondary px-4 py-1 rounded-lg group hover:bg-secondary hover:text-additional transition-all duration-300">
                      GitHub
                      <LuGithub className="text-secondary text-xl pb-1 inline pl-2 group-hover:scale-125 group-hover:text-additional transition-all duration-300" />
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Projects;
