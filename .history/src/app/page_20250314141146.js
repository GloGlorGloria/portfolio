import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#fff1df]">
      <div className="container mt-24 mx-auto px-16 py-12 sm:px-12">
        <HeroSection /> 
        <AboutSection />
        <ProjectsSection />
      </div>
      </main>
  );
}
