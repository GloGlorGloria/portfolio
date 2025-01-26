import styles from "./projects.module.css";
import Link from "next/link";

export default function Projects() {
  
  const projects = [
    { id: "1", title: "Print & E-Magazine", thumbnail: "/images/magazine_thumbnail.png" },
    { id: "2", title: "Project Two", thumbnail: "/project2-thumb.jpg" },
  ];

  return (
    <main className="main-container">
      <div className="container">
        <h1 className="title">PROJECTS</h1>
        <div className="grid">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="project-card">
              <div className="project-card">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="project-thumbnail"
                />
                <div className="project-details">
                  <h2 className="project-title">{project.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
