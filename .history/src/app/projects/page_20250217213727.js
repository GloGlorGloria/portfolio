"use client";
import { useState } from "react";
import styles from "./projects.module.css";
import Link from "next/link";

export default function Projects() {
  const projects = [
    { id: "relay", title: "Mobile App Development — Relay", category: "UX/UI Design", thumbnail: "/images/projects/relay/relay-thumbnail.png" },
    { id: "e-magazine", title: "Print & E-Magazine", category: "Graphic Design", thumbnail: "/images/projects/magazine/magazine_thumbnail.png" },
    { id: "can-design", title: "Can Packaging Design", category: "Graphic Design", thumbnail: "/images/projects/cans/3-cans-bg-yellow.png" },
    { id: "f1-poster", title: "F1 Poster Design", category: "Graphic Design", thumbnail: "/images/projects/F1/F1_thumbnail.png" },
    { id: "ford-poster", title: "FORD eAdvert", category: "Graphic Design", thumbnail: "/images/projects/Ford/Fordward_iPad.jpg" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>Featured Projects</h1>

        {/* Filter Buttons */}
        <div className={styles.buttonGroup}>
          {["All", "UX/UI Design", "Graphic Design", "Development"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${styles.filterButton} ${selectedCategory === category ? styles.activeButton : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className={styles.projectLink}>
                <div className={styles.projectCard}>
                  <img src={project.thumbnail} alt={project.title} className={styles.projectThumbnail} />
                  <div className={styles.projectDetails}>
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className={styles.noProjects}>No projects found.</p>
          )}
        </div>
      </div>
    </main>
  );
}
