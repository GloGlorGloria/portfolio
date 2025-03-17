"use client";
import React, { useState } from "react";
import LandingPage from "./LandingPage";
import HeroSection from "./HeroSection";

const MainPage = () => {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  return (
    <motion.div 
      initial={{ backgroundColor: "#fdf6ec" }} 
      animate={{ backgroundColor: isIntroComplete ? "#ffffff" : "#fdf6ec" }} 
      transition={{ duration: 1 }} // Smooth background fade
    >
      {!isIntroComplete && <LandingPage onIntroComplete={() => setIsIntroComplete(true)} />}
      {isIntroComplete && <HeroSection />}
    </motion.div>
  );
};

export default MainPage;
