import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#fff1df]">
      <div className="container mt-24 mx-auto px-16 py-12 sm:px-8">
        <HeroSection /> 
        <AboutSection />
        <ProjectsSection />
      </div>
      </main>
  );
}
