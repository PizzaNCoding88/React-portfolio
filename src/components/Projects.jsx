import data from "../data/projectData";
import { motion } from "framer-motion";
import { LuGithub, LuArrowRight } from "react-icons/lu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

const Projects = () => {
  const windowWidth = window.innerWidth;

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
      <div
        className={`${data.id % 2 === 0 ? "flex-row-reverse" : ""} ${
          windowWidth < 640 ? "flex-col" : "flex-row"
        } projects-container`}
        key={data.id}
      >
        <img
          src={data.source}
          className="sm:h-100% projectImg w-full sm:w-[50%]"
          alt={`Project${data.id} picture`}
        ></img>
        <div
          className="flexy flex-col px-4 text-center text-secondary sm:w-[50%] md:px-8 description"
        >
          <p className="text-md mb-4 font-bold uppercase lg:text-xl xl:pb-8 xl:text-2xl">
            {data.title}
          </p>
          <p className="mb-4 font-PrimaryF text-sm text-slate-300 xl:pb-8 xl:text-lg">
            {data.description}
          </p>
          <div className="flexy flex-col gap-4 md:flex-row md:gap-8">
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
        </div>
      </div>
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
