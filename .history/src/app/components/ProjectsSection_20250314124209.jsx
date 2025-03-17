"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import styles from "./ProjectsSection.module.css";

const projectsData = [
  {
    id: "relay",
    title: "Relay",
    images: [
      "/images/projects/relay/relay-thumbnail.png",
      "/images/projects/relay/relay-2.png",
      "/images/projects/relay/relay-3.png",
    ],
    projUrl: "/projects/relay",
  },
  {
    id: "magazine",
    title: "Building for Future",
    images: [
      "/images/projects/magazine/magazine_thumbnail.png",
      "/images/projects/magazine/magazine-2.png",
      "/images/projects/magazine/magazine-3.png",
    ],
    projUrl: "/projects/e-magazine",
  },
  {
    id: "tea-master",
    title: "Tea Master 茶禪一味",
    images: [
      "/images/projects/cans/3-cans-bg-yellow.png",
      "/images/projects/cans/tea-2.png",
      "/images/projects/cans/tea-3.png",
    ],
    projUrl: "/projects/can-design",
  },
  {
    id: "f1",
    title: "F1 Series",
    images: [
      "/images/projects/F1/F1_thumbnail.png",
      "/images/projects/F1/F1-2.png",
      "/images/projects/F1/F1-3.png",
    ],
    projUrl: "/projects/f1-poster",
  },
];

const ProjectStack = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={project.projUrl} passHref>
      <div
        className="relative w-72 h-48 cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {project.images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Project ${project.title} - ${index}`}
            className="absolute w-full h-full rounded-xl object-cover shadow-lg transition-all duration-300"
            style={{ zIndex: project.images.length - index }}
            initial={{ y: index * 5, rotate: 0 }}
            animate={
              isHovered
                ? { y: index * -10, rotate: index % 2 === 0 ? -5 : 5, scale: 1.05 }
                : { y: index * 5, rotate: 0, scale: 1 }
            }
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
          <p className="text-white font-bold text-lg">{project.title}</p>
        </div>
      </div>
    </Link>
  );
};

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold mt-16 mb-8">Featured Projects</h2>

      {/* Horizontal Scroll Section */}
      <div className="flex space-x-6 overflow-x-auto p-6">
        {projectsData.map((project) => (
          <ProjectStack key={project.id} project={project} />
        ))}
      </div>

      <div className={styles.nextProject}>
        <Link href="/projects" passHref>
          <button className={styles.nextButton}>
            All Projects <GoArrowUpRight className={`${styles.nextArrow}`} />
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProjectsSection;
