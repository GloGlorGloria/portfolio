"use client";
import React, { useState } from "react";
import LandingPage from "./components/LandingPage"; 
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  const [showHero, setShowHero] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-[#fff1df]">
      {!showHero ? (
        <LandingPage onExit={() => setShowHero(true)} />
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
