"use client";
import React, { useState } from "react";
import LandingPage from "./LandingPage";
import HeroSection from "./HeroSection";

const MainPage = () => {
  const [showHero, setShowHero] = useState(false);

  return (
    <div>
      {!showHero ? <LandingPage onExit={() => setShowHero(true)} /> : <HeroSection />}
    </div>
  );
};

export default MainPage;
