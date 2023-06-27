// import React from "react";
import { LuGithub, LuArrowRight } from "react-icons/lu";

const ProjectCard = (props) => {
  const windowWidth = window.innerWidth;
  const id = props.id;
  return (
    <div
      className={`${id % 2 === 0 && "flex-row-reverse"} ${
        windowWidth < 640 ? "flex-col" : "flex-row"
      } projects-container`}
    >
      <img
        src={props.image}
        className="sm:h-100% projectImg w-full sm:w-[50%]"
        alt={`Project${props.id} picture`}
      ></img>
      <div className="flexy flex-col px-4 text-center text-secondary sm:w-[50%] md:px-8 md: description">
        <p className="text-md mb-4 font-bold uppercase lg:text-xl xl:pb-8 xl:text-2xl">
          {props.title}
        </p>
        <p className="mb-4 font-PrimaryF text-sm text-slate-300 xl:pb-8 xl:text-lg">
          {props.description}
        </p>
        <div className="flexy flex-col gap-4 md:flex-row md:gap-8">
          <a href={props.link} target="_blank" rel="noreferrer">
            <button className="projects-button group">
              Link <LuArrowRight className="projects-button__icons" />
            </button>
          </a>
          <a href={props.repo} target="_blank" rel="noreferrer">
            <button className="projects-button group">
              GitHub
              <LuGithub className="projects-button__icons" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
