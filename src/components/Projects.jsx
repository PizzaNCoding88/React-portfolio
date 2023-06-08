import data from "../data/projectData";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <>
      <section>
        {data.map((data) => {
          return (
            <div
              key={data.id}
              className={`w-full ${data.id === 1 ? "pt-8" : "mt-8"}`}
              id="projects"
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
                    hidden: { opacity: 0, x: -160 },
                  }}
                ></motion.img>
                <p className="text-secondary w-4/5 mx-auto uppercase text-center mt-2 font-bold">
                  {data.title}
                </p>
                <p className="text-secondary w-4/5 mx-auto text-center text-sm mt-4 font-thin">
                  {data.description}
                </p>
              </a>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Projects;
