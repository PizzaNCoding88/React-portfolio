import data from "../data/projectData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  

  const card = data.map((data) => {
    return (
      <ProjectCard image={data.source} key={data.id} title={data.title} description={data.description} link={data.href} repo={data.repo} id={data.id}/>
    );
  });

  return (
    <>
      <section
        className="mx-auto w-4/5 overflow-x-hidden pb-4 sm:w-full"
        id="projects"
      >
        <h2 className="my-10 xl:mt-4 text-center text-2xl font-bold text-secondary sm:text-4xl">
          Personal Projects
        </h2>
        {card}
      </section>
    </>
  );
};

export default Projects;
