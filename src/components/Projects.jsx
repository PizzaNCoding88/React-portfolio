import data from "../data/projectData";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-[#222222]">
        {data.map((data) => {
          return (
            <div
              key={data.id}
              className={`w-full ${data.id === 1 ? "pt-8" : "mt-8"}`}
              id="projects"
            >
              <a href={data.href} target="_blank" rel="noreferrer">
                <motion.img
                  src={data.source}
                  alt=""
                  className="w-4/5 mx-auto rounded-md"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -160 },
                  }}
                ></motion.img>
                <p className="text-secondary w-4/5 mx-auto uppercase text-center mt-2 font-bold">
                  {data.title}
                </p>
                <p className="text-secondary w-4/5 mx-auto text-center text-sm mt-4 font-thin">
                  {data.description}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;

// const imgVariants = {
//   // visible: { x: "0%", transition: { duration: 1 } },
//   // hidden: { x: "-150%" },
//   visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
//   hidden: { opacity: 0, scale: 0.5 },
// };

// const Projects = () => {
//   const imgControls = useAnimation();
//   const [ref, inView] = useInView();
//   useEffect(() => {
//     if (inView) {
//       imgControls.start("visible");
//     }
//   }, [imgControls, inView]);
//   return (
//     <>
//       <div className="bg-gradient-to-r from-primary to-[#222222]">
//         {data.map((data) => {
//           return (
//             <div
//               key={data.id}
//               className={`w-full ${data.id === 1 ? "pt-8" : "mt-8"}`}
//               id="projects"
//             >
//               <a href={data.href} target="_blank" rel="noreferrer">
//                 <motion.img
//                   src={data.source}
//                   alt="project"
//                   className="w-4/5 mx-auto rounded-md"
//                   variants={imgVariants}
//                   initial="hidden"
//                   animate={imgControls}
//                   ref={ref}
//                 ></motion.img>
//                 <p className="text-secondary w-4/5 mx-auto uppercase text-center mt-2 font-bold">
//                   {data.title}
//                 </p>
//                 <p className="text-secondary w-4/5 mx-auto text-center text-sm mt-4 font-thin">
//                   {data.description}
//                 </p>
//               </a>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Projects;

// import data from "../data/projectData";

// const Projects = () => {
//   return (
//     <>
//       <div className="bg-gradient-to-r from-primary to-[#222222]">
//         {data.map((data) => {
//           return (
//             <div
//               key={data.id}
//               className={`w-full ${data.id === 1 ? "pt-8" : "mt-8"}`}
//               id="projects"
//             >
//               <a href={data.href} target="_blank" rel="noreferrer">
//                 <img
//                   src={data.source}
//                   alt=""
//                   className="w-4/5 mx-auto rounded-md"
//                 ></img>
//                 <p className="text-secondary w-4/5 mx-auto uppercase text-center mt-2 font-bold">
//                   {data.title}
//                 </p>
//                 <p className="text-secondary w-4/5 mx-auto text-center text-sm mt-4 font-thin">
//                   {data.description}
//                 </p>
//               </a>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Projects;
