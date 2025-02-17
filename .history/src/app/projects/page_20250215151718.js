import styles from "./projects.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  
  const projects = [
    { id: "relay", title: "Mobile App Development — Relay", thumbnail: "/images/projects/relay/relay-thumbnail.png" },
    { id: "e-magazine", title: "Print & E-Magazine", thumbnail: "/images/projects/magazine/magazine_thumbnail.png" },
    { id: "can-design", title: "Can Packaging Design", thumbnail: "/images/projects/cans/3-cans-bg-yellow.png" },
    { id: "f1-poster", title: "F1 Poster Design", thumbnail: "/images/projects/F1/F1_thumbnail.png" },
    { id: "ford-poster", title: "FORD eAdvert", thumbnail: "/images/projects/Ford/Fordward_iPad.jpg" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#fff1df]">
      <div className="container mt-24 mx-auto px-16 py-12 xs:px-8 s:py-8">
        <h1 className="text-4xl font-bold mb-8">Featured Projects</h1>
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
