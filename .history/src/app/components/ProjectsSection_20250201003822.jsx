import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1, 
        title:"Relay",
        description: "Ridesharing App for parents",
        image: "/images/magazine_thumbnail.png",
        tag: ["All", "UXUI", "Web"],
        projUrl: "/",
    },
    {
        id: 2, 
        title:"Building for Future",
        description: "Print & E-Magazine",
        image: "/images/magazine_thumbnail.png",
        tag: ["All", "Graphic Design"],
        projUrl: "/projects/e-magazine",
    },
    {
        id: 3, 
        title:"F1 Poster Design",
        description: "Graphic Design",
        image: "/images/F1_thumbnail.png",
        tag: ["All", "Graphic Design"],
        projUrl: "/projects/f1-poster",
    },
    {
        id: 3, 
        title:"Ford eAdvert",
        description: "Graphic Design",
        image: "/images/fordward outdoor.png",
        tag: ["All", "Graphic Design"],
        projUrl: "/projects/ford-poster",
    },
]
const ProjectsSection = () => {
  return (
    <>
    <h2 className="text-center text-4xl font-bold mt-4 mb-8">
        My Projects
    </h2>
    <div className="grid md:grid-cols-2 gap-12 md:gap-12">
        {projectsData.map((project) => 
        <ProjectCard 
            key={project.id} 
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            projUrl={project.projUrl}/>)}
    </div>
    </>
  )
}

export default ProjectsSection
