import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1, 
        title:"Relay",
        description: "Ridesharing App for parents",
        image: "/public/images/magazine_thumbnail.png",
        tag: ["All", "UXUI", "Web"],
    },
    {
        id: 2, 
        title:"Building for Future",
        description: "Print & E-Magazine",
        image: "/images/magazine_thumbnail.png",
        tag: ["All", "Graphic Design"],
    },
    {
        id: 3, 
        title:"F1 Poster Design",
        description: "Graphic Design",
        image: "/images/F1_thumbnail.png",
        tag: ["All", "Graphic Design"],
    },
    {
        id: 3, 
        title:"Ford eAdvert",
        description: "Graphic Design",
        image: "/images/fordward outdoor.png",
        tag: ["All", "Graphic Design"],
    },
]
const ProjectsSection = () => {
  return (
    <>
    <h2>My Projects</h2>
    <div>{projectsData.map((project) => 
        <ProjectCard 
            key={project.id} 
            title={project.title}
            description={project.description}
            imgUrl={project.image}/>)}
    </div>
    </>
  )
}

export default ProjectsSection
