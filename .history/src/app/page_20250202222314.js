import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#fff1df]">
      <Navbar/>
      <div className="container mt-24 mx-auto py-12">
        <HeroSection /> 
        <AboutSection />
        <ProjectsSection />
      </div>
 
      </main>
  );
}
