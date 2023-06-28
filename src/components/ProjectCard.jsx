import { LuGithub, LuArrowRight } from "react-icons/lu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

const ProjectCard = (props) => {
  const windowWidth = window.innerWidth;
  const img = useRef();
  const container = useRef();
  const descr = useRef();
  const { image, title, description, link, repo, id } = props;
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top: 95%",
      },
    });

    tl.to(img.current, {
      y: 0,
      autoAlpha: 1,
      duration: 1.5,
      ease: "slow(0.7, 0.7, false)",
    });

    tl.to(descr.current, {
      y: 0,
      autoAlpha: 1,
      duration: 1.5,
      ease: "power1.inOut",
      delay: -1.5,
    });
  });

  return (
    <div
      className={`${id % 2 === 0 && "flex-row-reverse"} ${
        windowWidth < 640 ? "flex-col" : "flex-row"
      } projects-container`}
      ref={container}
    >
      <img
        src={image}
        className="sm:h-100% projectImg w-full sm:w-[50%] opacity-0 -translate-y-full"
        alt={`Project${id} picture`}
        ref={img}
      ></img>
      <div
        className="flexy flex-col px-4 text-center text-secondary sm:w-[50%] md:px-8 description opacity-0 translate-y-1/2"
        ref={descr}
      >
        <p className=" text-sm mb-4 font-bold uppercase lg:text-lg xl:pb-8 xl:text-2xl">
          {title}
        </p>
        <p className="mb-4 text-xs font-PrimaryF lg:text-sm text-slate-300 xl:pb-8 xl:text-lg">
          {description}
        </p>
        <div className="flexy flex-col gap-4 md:flex-row md:gap-8">
          <a href={link} target="_blank" rel="noreferrer">
            <button className="projects-button group">
              Link <LuArrowRight className="projects-button__icons" />
            </button>
          </a>
          <a href={repo} target="_blank" rel="noreferrer">
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
