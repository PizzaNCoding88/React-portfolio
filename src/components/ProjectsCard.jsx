import React from "react";

const ProjectsCard = ({dataCard}) => {
  return (
    <div>
        <div>
            <img src={dataCard.source} alt={`project${dataCard.id}`} />
        </div>
        <div>
            <p className="text-secondary">{dataCard.title}</p>
        </div>
    </div>
  )
}

export default ProjectsCard