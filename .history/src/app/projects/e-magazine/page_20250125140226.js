import { notFound } from "next/navigation"; // Optional for handling invalid project IDs
import styles from "./projects.module.css";

export default function ProjectDetails({ params }) {
  const { projectId } = params;

  // Example: Fetch project details dynamically
  const project = getProjectById(projectId); // Replace with real fetch logic

  if (!project) {
    // If project ID is invalid, show a 404 page
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="container mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-4">{project.description}</p>
        {/* Example thumbnail */}
        <img
          src={project.image}
          alt={project.title}
          className="mt-6 w-full h-auto rounded-md"
        />
      </div>
    </main>
  );
}

// Example mock function to simulate fetching project details
function getProjectById(id) {
  const projects = [
    { id: "1", title: "Project One", description: "Details of project one", image: "/project1.jpg" },
    { id: "2", title: "Project Two", description: "Details of project two", image: "/project2.jpg" },
  ];

  return projects.find((project) => project.id === id);
}
