"use client";
import React from "react";
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
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 flex items-center justify-center gap-2">
        My Projects
      </h2>

      {/* Grid Layout (No Gaps, Fully Stacked) */}
      <div className="grid grid-cols-3 gap-0 auto-rows-auto">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`relative group overflow-hidden ${
              index % 3 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
            }`}
          >
            <a href={project.projUrl} className="block relative">
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                <p className="text-white text-sm">{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
