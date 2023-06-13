import data from "../data/projectData";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <>
      <section className="overflow-x-hidden w-4/5 mx-auto pb-4 ">
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
