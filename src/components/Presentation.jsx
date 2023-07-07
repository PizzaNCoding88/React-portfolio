import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Presentation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const avatar = useRef(),
    h2 = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      avatar.current,
      { y: 100, scale: 0 },
      {
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: h2.current,
          start: "top 90%",
          end: "bottom bottom",
        },
      }
    );
  }, []);
  return (
    <>
      <section className="h-screen">
        <div className="w-[75%] mx-auto flex justify-center flex-col h-full ">
          <div className="sm:border-8 sm:border-secondary sm:p-8 sm:rounded-2xl sm:animate-fadeIn">
            <h1 className="text-secondary text-center  font-bold text-xl sm:text-2xl font-PrimaryF ">
              Building Experiences, Crafting Connections
            </h1>
            <h2
              className=" text-slate-300 opacity-90 text-center mt-12 font-extralight italic sm:text-xl font-SingatureF lg:text-2xl"
              ref={h2}
            >
              Umberto Nardiello
            </h2>
            <img
              src="/assets/avatar.webp"
              alt="avatar"
              className=" rounded-3xl mt-12 sm:w-[25rem] mr-8 sm:mx-auto"
              ref={avatar}
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;
