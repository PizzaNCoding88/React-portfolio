import data from "../data/projectData";
import { motion } from "framer-motion";
import { LuGithub, LuArrowRight } from "react-icons/lu";

const Projects = () => {
  const windowWidth = window.innerWidth;
  const card = data.map((data) => {
    return (
      <div
        className={`${data.id % 2 === 0 ? "flex-row-reverse" : ""} ${
          windowWidth < 640 ? "flex-col" : "flex-row"
        } projects-container`}
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
          className="w-full sm:w-[50%] sm:h-100%"
          alt={`Project${data.id} picture`}
        ></motion.img>
        <motion.div
          className="text-secondary text-center flexy flex-col sm:w-[50%] md:px-8 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 160 },
          }}
        >
          <p className="uppercase font-bold mb-4 text-md lg:text-xl xl:text-2xl xl:pb-8">
            {data.title}
          </p>
          <p className="text-sm mb-4 text-slate-300 xl:text-lg xl:pb-8 font-PrimaryF">
            {data.description}
          </p>
          <div className="flexy flex-col md:flex-row gap-4 md:gap-8">
            <a href={data.href} target="_blank" rel="noreferrer">
              <button className="projects-button group">
                Link <LuArrowRight className="projects-button__icons" />
              </button>
            </a>
            <a href={data.repo} target="_blank" rel="noreferrer">
              <button className="projects-button group">
                GitHub
                <LuGithub className="projects-button__icons" />
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    );
  });
  return (
    <>
      <section
        className="overflow-x-hidden w-4/5 mx-auto sm:w-full pb-4"
        id="projects"
      >
        <h2 className="text-secondary text-2xl sm:text-4xl text-center font-bold mb-10">
          Personal Projects
        </h2>
        {card}
      </section>
    </>
  );
};

export default Projects;
