import { LuGithub, LuArrowRight } from "react-icons/lu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import data from "../data/projectData";

const ProjectCard = (props) => {
  const { image, title, description, link, repo, id, alt } = props;
  const img = useRef();
  const buttonLink = useRef();
  const buttonGit = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: img.current,
        start: "top 95%",
      },
    });
    tl.to(img.current, { autoAlpha: 1, duration: 3 });
  });
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: buttonLink.current,
        start: "top 95%",
      },
    });
    tl.to(buttonLink.current, {
      autoAlpha: 1,
      duration: 0.5,
      ease: "power3.out",
      delay: -0.2,
    });
    tl.to(buttonGit.current, {
      autoAlpha: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  });

  return (
    <div
      className={`${
        id === data.length
          ? "md:flex md:flex-col md:justify-center md:items-center md:mx-auto"
          : ""
      } mb-14`}
    >
      <div
        className=" mt-10 mb-4 w-[95%] mx-auto relative group shadow-projects-shadow hover:shadow-none transition-shadow duration-300 opacity-0 rounded-md overflow-hidden "
        ref={img}
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
      </div>
      <div className="w-[95%] mx-auto flex items-center justify-center gap-[20%] sm:gap-[30%] ">
        <a href={link} target="_blank" rel="noreferrer">
          <button
            className="projects-buttons group duration-500"
            ref={buttonLink}
          >
            Link <LuArrowRight className="projects-button__icon" />
          </button>
        </a>
        <a
          aria-label="github"
          href={repo}
          target="_blank"
          rel="noreferrer"
          ref={buttonGit}
          className="opacity-0"
        >
          <LuGithub className="projects-button__icon hover:text-white hover:scale-105 transition-all duration-300" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
