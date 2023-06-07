import data from "../data/projectData";

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
                <img
                  src={data.source}
                  alt=""
                  className="w-4/5 mx-auto rounded-md"
                ></img>
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
