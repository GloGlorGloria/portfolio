"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Relay",
    description: "Mobile App Development",
    image: "/images/projects/relay/relay-thumbnail.png",
    tag: ["All", "UXUI", "Web"],
    projUrl: "/projects/relay",
  },
  {
    id: 2,
    title: "Building for Future",
    description: "Print & E-Magazine",
    image: "/images/projects/magazine/magazine_thumbnail.png",
    tag: ["All", "Graphic Design"],
    projUrl: "/projects/e-magazine",
  },
  {
    id: 3,
    title: "Tea Master 茶禪一味",
    description: "Can Packaging Design",
    image: "/images/projects/cans/3-cans-bg-yellow.png",
    tag: ["All", "Graphic Design"],
    projUrl: "/projects/can-design",
  },
  {
    id: 4,
    title: "F1 Series",
    description: "Graphic Design",
    image: "/images/projects/F1/F1_thumbnail.png",
    tag: ["All", "Graphic Design"],
    projUrl: "/projects/f1-poster",
  },
  {
    id: 5,
    title: "Ford eAdvert",
    description: "Graphic Design",
    image: "/images/projects/Ford/Fordward_iPad.jpg",
    tag: ["All", "Graphic Design"],
    projUrl: "/projects/ford-poster",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold mt-4 mb-8">My Projects</h2>
      <div className="grid grid-cols-2 auto-rows-fr w-full">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`${
              index % 2 === 0 ? "grid grid-cols-[2fr_1fr]" : "grid grid-cols-[1fr_2fr]"
            }`}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              projUrl={project.projUrl}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
