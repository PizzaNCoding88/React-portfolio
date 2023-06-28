// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";

// const Presentation = () => {
//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     gsap.fromTo(
//       ".img",
//       { y: 100, scale: 0 },
//       {
//         y: 0,
//         scale: 1,
//         duration: 1.5,
//         ease: "power1.inOut",
//         scrollTrigger: {
//           trigger: "h2",
//           start: "top 90%",
//           end: "bottom bottom",
//         },
//       }
//     );
//   }, []);
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Presentation = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".h2",
        start: "top 170%",
        // end: "bottom bottom",
        scrub: true,
        markers: true,
      },
    });

    tl1.from(".img", {
      height: 0,
      autoAlpha: 0,
      duration: 1,
    });
    tl1.to(".img", {
      height: "auto",
      autoAlpha: 1,

      duration: 1,
    });
  }, []);

  return (
    <>
      <section className="h-screen">
        <div className="w-[75%] mx-auto flex justify-center flex-col h-full ">
          <div className="sm:border-8 sm:border-secondary sm:p-8 sm:rounded-2xl sm:animate-fadeIn">
            <h1 className="text-secondary text-center  font-bold text-xl sm:text-2xl font-PrimaryF ">
              Building Experiences, Crafting Connections
            </h1>
            <h2 className=" text-slate-300 opacity-90 text-center mt-12 font-extralight italic sm:text-xl font-SingatureF lg:text-2xl h2">
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
