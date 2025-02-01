import React from 'react'

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
        <div 
            className="h-52 md:h-72"
            sytle={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        ></div>
    <div className="text-blue">
        <h5>{title}</h5>
    </div>
        Project Card
    </div>
  )
}

export default ProjectCard
