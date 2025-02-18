"use client";
import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Relay",
    description: "Mobile App Development",
    image: "/images/projects/relay/relay-thumbnail.png",
    projUrl: "/projects/relay",
  },
  {
    id: 2,
    title: "Building for Future",
    description: "Print & E-Magazine",
    image: "/images/projects/magazine/magazine_thumbnail.png",
    projUrl: "/projects/e-magazine",
  },
  {
    id: 3,
    title: "Tea Master 茶禪一味",
    description: "Can Packaging Design",
    image: "/images/projects/cans/3-cans-bg-yellow.png",
    projUrl: "/projects/can-design",
  },
  {
    id: 4,
    title: "F1 Series",
    description: "Graphic Design",
    image: "/images/projects/F1/F1_thumbnail.png",
    projUrl: "/projects/f1-poster",
  },
  {
    id: 5,
    title: "Ford eAdvert",
    description: "Graphic Design",
    image: "/images/projects/Ford/Fordward_iPad.jpg",
    projUrl: "/projects/ford-poster",
  },
];

const ProjectsSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-0">
      {/* Title with Icon */}
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 flex items-center justify-center gap-2">
        My Projects <FaHandPointRight className="text-3xl text-gray-700" />
      </h2>

      {/* Grid Layout (No Gaps, Fully Stacked) */}
      <div className="grid grid-cols-3 gap-0 auto-rows-auto">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`relative ${
              index % 3 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
            }`}
          >
            <ProjectCard
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              projUrl={project.projUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
