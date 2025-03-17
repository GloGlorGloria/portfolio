"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

const LandingPage = () => {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsIntroComplete(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Fullscreen Landing Page */}
      {!isIntroComplete && (
        <motion.div
          className="h-screen w-full fixed top-0 left-0 flex flex-col items-center justify-center text-center bg-[#fdf6ec] z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: isIntroComplete ? 0 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl font-bold tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            GloGlorGloria
          </motion.h1>
          <motion.p
            className="text-xl mt-4 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <span className="text-[#ff6b6b] font-semibold">Resilience</span>,
            <span className="text-[#6b6bff] font-semibold"> Innovation</span>, and
            <span className="text-[#6bff6b] font-semibold"> Adaptability</span>
          </motion.p>
          <motion.div
            className="absolute bottom-12 flex flex-col items-center text-gray-500"
            initial={{ opacity: 1 }}
            animate={{ opacity: isIntroComplete ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm">Scroll to explore</p>
            <motion.div
              className="w-6 h-6 border-b-2 border-r-2 rotate-45"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <div className={`transition-opacity duration-1000 ${isIntroComplete ? "opacity-100" : "opacity-0"}`}>
        <HeroSection />
      </div>
    </div>
  );
};

export default LandingPage;
