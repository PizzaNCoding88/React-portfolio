import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Presentation = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".img",
      { y: 100, scale: 0 },
      {
        y: 0,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: "h2",
          start: "top 70%",
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
            <h1 className="text-secondary text-center  font-bold text-2xl sm:text-4xl font-PrimaryF ">
              Building the web that I like
            </h1>
            <h2 className=" text-slate-300 opacity-90 text-center mt-12 font-extralight italic sm:text-xl font-SingatureF lg:text-3xl">
              Umberto Nardiello
            </h2>
            <img
              src="/assets/avatar.jpeg"
              alt="avatar"
              className=" rounded-3xl mt-12 sm:w-[25rem] mr-8 sm:mx-auto img"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;
