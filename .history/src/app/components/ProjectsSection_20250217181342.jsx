"use client";
import React from 'react'
import ProjectCard from './ProjectCard'
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';
import styles from './ProjectsSection.module.css';

const projectsData = [
    {
        id: 1, 
        title:"Relay",
        description: "Mobile App Development",
        image: "/images/projects/relay/relay-thumbnail.png",
        tag: ["All", "UXUI", "Web"],
        projUrl: "/projects/relay",
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
        id: 3, 
        title:"Tea Master 茶禪一味",
        description: "Can Packaging Design",
        image: "/images/projects/cans/3-cans-bg-yellow.png",
        tag: ["All", "Graphic Design"],
        projUrl: "/projects/can-design",
    },
    {
        id: 4, 
        title:"F1 Series",
        description: "Graphic Design",
        image: "/images/projects/F1/F1_thumbnail.png",
        tag: ["All", "Graphic Design"],
        projUrl: "/projects/f1-poster",
    },
    // {
    //     id: 5, 
    //     title:"Ford eAdvert",
    //     description: "Graphic Design",
    //     image: "/images/projects/Ford/Fordward_iPad.jpg",
    //     tag: ["All", "Graphic Design"],
    //     projUrl: "/projects/ford-poster",
    // },
    
]
const ProjectsSection = () => {
  return (
    <>
    <h2 className="text-center text-4xl font-bold mt-6 mb-8">
        Featured Projects
    </h2>
    <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-12 md:gap-8">
        {projectsData.map((project) => 
        <ProjectCard 
            key={project.id} 
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            projUrl={project.projUrl}/>)}
    </div>

    <div className={styles.nextProject}>
          <Link href="/projects" passHref>
              <button className={styles.nextButton}>All Projects<GoArrowUpRight className={`${styles.nextArrow}`}/></button>
          </Link> 
    </div>
    </>
  )
}

export default ProjectsSection
