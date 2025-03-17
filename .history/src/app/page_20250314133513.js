"use client";
import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Once scrolled down, hide the landing page
      if (window.scrollY > 10) {
        setShowLanding(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#fff1df]">
      {showLanding ? (
        <LandingPage />
      ) : (
        <div className="container mt-24 mx-auto px-16 py-12 sm:px-12">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
        </div>
      )}
    </main>
  );
}
