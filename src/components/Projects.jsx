import data from "../data/projectData";
// import { LuGithub, LuArrowRight } from "react-icons/lu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const triggers = document.querySelectorAll(".projects-container");
    triggers.forEach((container) => {
      let image = container.querySelector(".projectImg");
      let description = container.querySelector(".description")
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top: 95%",
        },
      });

      tl.fromTo(
        image,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "slow(0.7, 0.7, false)" }
      );

      tl.fromTo(
        description,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power1.inOut", delay: -1 }
      );

      
    });
  });

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
        <h2 className="mb-10 text-center text-2xl font-bold text-secondary sm:text-4xl">
          Personal Projects
        </h2>
        {card}
      </section>
    </>
  );
};

export default Projects;
