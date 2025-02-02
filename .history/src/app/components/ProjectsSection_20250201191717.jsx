"use client";
import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1, 
        title:"Relay",
        description: "Ridesharing App for parents",
        image: "/images/projects/magazine/magazine_thumbnail.png",
        tag: ["All", "UXUI", "Web"],
        projUrl: "/",
    },
    {
        id: 2, 
        title:"Building for Future",
        description: "Print & E-Magazine",
        image: "/images/projects/magazine/magazine_thumbnail.png",
        tag: ["All", "Graphic Design"],
        projUrl: "/projects/e-magazine",
    },
    {
        id: 6, 
        title:"Tea Master 茶禪一味",
        description: "Can Packaging Design",
        image: "/images/projects/cans/3 cans with bg.png",
        tag: ["All", "Graphic Design"],
        projUrl: "/projects/e-magazine",
    },
    {
        id: 4, 
        title:"F1 Poster Design",
        description: "Graphic Design",
        image: "/images/projects/F1/F1_thumbnail.png",
        tag: ["All", "Graphic Design"],
        projUrl: "/projects/f1-poster",
    },
    {
        id: 5, 
        title:"Ford eAdvert",
        description: "Graphic Design",
        image: "/images/projects/Ford/Fordward_iPad.jpg",
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
    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-12 md:gap-8">
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
