import { notFound } from "next/navigation"; // Optional for handling invalid project IDs

export default function ProjectDetails({ params }) {
  const { projectId } = params;

  // Example: Fetch project details dynamically
  const project = getProjectById(Print-E-magazine); // Replace with real fetch logic

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

function getProjectById(id) {
  const projects = [
    { id: "Print-E-magazine", title: "Print & E-Magazine", thumbnail: "/images/magazine_thumbnail.png" },
    { id: "F1-poster", title: "F1 Poster Design", thumbnail: "/images/F1_thumbnail.png" },
  ];

  return projects.find((project) => project.id === id);
}
