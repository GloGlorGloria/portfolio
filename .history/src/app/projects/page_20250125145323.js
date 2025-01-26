import styles from "./projects.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  
  const projects = [
    { id: "e-magazine", title: "Print & E-Magazine", thumbnail: "/images/magazine_thumbnail.png" },
    { id: "F1-poster", title: "F1 Poster Design", thumbnail: "/images/F1_thumbnail.png" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#fff1df]">
      <div className="container mt-24 mx-auto px-12 py-12">
        <h1 className="text-4xl font-bold mb-8">PROJECTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="block">
              <div className={`${styles.project__card}`} >
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
          ))}
        </div>
      </div>
    </main>
  );
}
