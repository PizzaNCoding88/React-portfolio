import React from "react"
import data from "../data/projectData.json"
import ProjectsCard from "./ProjectsCard"

const Projects = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-[#222222]'>
        {data.map((d)=>{
          <ProjectsCard dataCard={d} key={d.id} />
        })};
    </div>
  )
}

export default Projects;