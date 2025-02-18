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
    <main className="flex min-h-screen flex-col bg-[#fff1df]">
      <div className="container mt-24 mx-auto px-16 py-12 sm:px-8 sm:py-8">
        <h1 className="text-5xl text-center font-bold mb-8">Featured Projects</h1>
        <div className="mb-12 flex justify-center gap-4">
          {["All", "UX/UI Design", "Graphic Design"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-m font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-[var(--primary)] text-[var(--accent)]"
                  : "bg-[var(--accent)] text-[var(--primary)] hover:bg-[var(--accent)] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="block">
                <div className={`${styles.project__card}`}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-lg text-gray-600">No projects found.</p>
          )}
        </div>
      </div>
    </main>
  );
}
