
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import LandingPage from "./components/LandingPage";


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#fff1df]">
      <div className="container mt-24 mx-auto px-16 py-12 sm:px-12">
        <LandingPage />
        <AboutSection />
        <ProjectsSection />
      </div>
      </main>
  );
}
