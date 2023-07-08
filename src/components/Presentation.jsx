import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Presentation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const avatar = useRef(),
    comp = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(avatar.current, {
        scale: 1,
        duration: 0.8,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: avatar.current,
          start: "top 95%",
          end: "bottom bottom",
        },
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="h-screen">
        <div
          className="w-[75%] mx-auto flex justify-center flex-col h-full"
          ref={comp}
        >
          <div className="sm:border-8 sm:border-secondary sm:p-8 sm:rounded-2xl sm:animate-fadeIn">
            <h1 className="text-secondary text-center  font-bold text-xl sm:text-2xl font-PrimaryF ">
              Building Experiences, Crafting Connections
            </h1>
            <h2 className=" text-slate-300 opacity-90 text-center mt-12 font-extralight italic sm:text-xl font-SingatureF lg:text-2xl">
              Umberto Nardiello
            </h2>
            <img
              src="/assets/avatar.webp"
              alt="avatar"
              className=" rounded-3xl mt-12 sm:w-[25rem] mr-8 sm:mx-auto scale-[0.1] "
              ref={avatar}
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;
