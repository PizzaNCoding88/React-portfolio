import { LuGithub, LuArrowRight } from "react-icons/lu";
import { motion } from "framer-motion";
import data from "../data/projectData";

const ProjectCard = (props) => {
  const { image, title, description, link, repo, id, alt } = props;

  return (
    <div
      className={`${
        id === data.length
          ? "md:flex md:flex-col md:justify-center md:items-center md:mx-auto"
          : ""
      } mb-14`}
    >
      <motion.div
        className=" mt-10 mb-4 w-[95%] mx-auto relative group shadow-projects-shadow hover:shadow-none transition-shadow duration-300 rounded-md overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <img
          alt={alt}
          src={image}
          className="group-hover:blur-[8px] group-hover:opacity-40 group-hover:transition-all group-hover:duration-300 group-hover:ease-out group-hover:scale-[.98]"
          loading="lazy"
        />
        <div className="absolute left-[5%] bottom-[5%] w-4/5 ">
          <h2 className="text-secondary text-sm sm:text-xl md:text-lg uppercase opacity-0 font-bold group-hover:opacity-100 group-hover:transition-all group-hover:duration-1000 group-hover:ease-out mb-8 xl:text-xl">
            {title}
          </h2>
          <p className="text-additional text-xs sm:text-lg md:text-sm opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-1000 group-hover:ease-out xl:text-lg">
            {description}
          </p>
        </div>
      </motion.div>

      <div className="w-[95%] mx-auto flex items-center justify-center gap-[20%] sm:gap-[30%] ">
        <motion.a
          href={link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, ease: "easeInOut" }}
        >
          <button className="projects-buttons group duration-500 text-lg sm:text-xl lg:text-lg xl:text-2xl">
            Link{" "}
            <LuArrowRight className="projects-button__icon text-lg sm:text-xl lg:text-lg xl:text-2xl" />
          </button>
        </motion.a>
        <motion.a
          aria-label="github"
          href={repo}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, ease: "easeInOut" }}
          className={`${repo === undefined ? "hidden" : ""}`}
        >
          <LuGithub className="projects-button__icon hover:text-white hover:scale-105 transition-all duration-300 text-lg sm:text-xl lg:text-lg xl:text-2xl" />
        </motion.a>
      </div>
    </div>
  );
};

export default ProjectCard;
