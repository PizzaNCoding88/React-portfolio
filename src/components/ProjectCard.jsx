import { LuGithub, LuArrowRight } from "react-icons/lu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

const ProjectCard = (props) => {
  const { image, title, description, link, repo, id } = props;
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
      delay: -0.55,
    });
  });

  return (
    <div className="mb-14">
      <div
        className=" mt-10 mb-4 w-[95%] mx-auto relative group shadow-projects-shadow hover:shadow-none transition-shadow duration-300 opacity-0 "
        ref={img}
      >
        <img
          src={image}
          alt=""
          className="group-hover:blur-[8px] group-hover:opacity-40 group-hover:transition-all group-hover:duration-300 group-hover:ease-out group-hover:scale-[.98] rounded-md"
        />
        <div className="absolute left-[5%] bottom-[5%] w-4/5 ">
          <p className="text-secondary text-lg uppercase opacity-0 font-bold group-hover:opacity-100 group-hover:transition-all group-hover:duration-1000 group-hover:ease-out mb-8">
            {title}
          </p>
          <p className="text-additional text-sm opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-1000 group-hover:ease-out">
            {description}
          </p>
        </div>
      </div>

      <div className="w-[95%] mx-auto flex justify-between">
        <a href={link} target="_blank" rel="noreferrer">
          <button
            className="hover:text-additional relative before:w-0 before:h-[2px] before:absolute before:-bottom-1 before:rounded-md before:bg-secondary hover:before:w-full before:transition-all before:duration-300  transition-all duration-300 xl:px-8 xl:py-2 xl:text-xl group text-secondary opacity-0"
            ref={buttonLink}
          >
            Link <LuArrowRight className="projects-button__icon" />
          </button>
        </a>
        <a href={repo} target="_blank" rel="noreferrer">
          <button
            className="hover:text-additional relative before:w-0 before:h-[2px] before:absolute before:-bottom-1 before:rounded-md before:bg-secondary hover:before:w-full before:transition-all before:duration-300  transition-all duration-500 xl:px-8 xl:py-2 xl:text-xl group text-secondary mr-1 opacity-0"
            ref={buttonGit}
          >
            GitHub
            <LuGithub className="projects-button__icon" />
          </button>
        </a>
      </div>
    </div>
    // <div
    //   className={`${id % 2 === 0 && "flex-row-reverse"} ${
    //     windowWidth < 640 ? "flex-col" : "flex-row"
    //   } projects-container`}
    //   ref={container}
    // >
    //   <img
    //     src={image}
    //     className="sm:h-100% projectImg w-full sm:w-[50%] opacity-0 -translate-y-full"
    //     alt={`Project${id} picture`}
    //     ref={img}
    //   ></img>
    //   <div
    //     className="flexy flex-col px-4 text-center text-secondary sm:w-[50%] md:px-8 description opacity-0 translate-y-1/2"
    //     ref={descr}
    //   >
    //     <p className=" text-sm mb-4 font-bold uppercase lg:text-lg xl:pb-8 xl:text-2xl">
    //       {title}
    //     </p>
    //     <p className="mb-4 text-xs font-PrimaryF lg:text-sm text-slate-300 xl:pb-8 xl:text-lg">
    //       {description}
    //     </p>
    //     <div className="flexy flex-col gap-4 md:flex-row md:gap-8">
    //       <a href={link} target="_blank" rel="noreferrer">
    //         <button className="projects-button group">
    //           Link <LuArrowRight className="projects-button__icons" />
    //         </button>
    //       </a>
    //       <a href={repo} target="_blank" rel="noreferrer">
    //         <button className="projects-button group">
    //           GitHub
    //           <LuGithub className="projects-button__icons" />
    //         </button>
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProjectCard;
