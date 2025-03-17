"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

const LandingPage = () => {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When the user scrolls past 80% of the viewport, start fade out
      if (window.scrollY > window.innerHeight * 0.8) {
        setFadeOut(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        setIsIntroComplete(true);
        // Scroll back to top to ensure HeroSection is visible
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 500); // Delay to sync with fade-out animation
    }
  }, [fadeOut]);

  return (
    <div>
      {/* Fullscreen Landing Page */}
      {!isIntroComplete && (
        <motion.div
          className="h-screen w-full fixed top-0 left-0 flex flex-col items-center justify-center text-center bg-[#fdf6ec] z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
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
            animate={{ opacity: fadeOut ? 0 : 1 }}
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
      {!isIntroComplete ? (
        <div className="h-screen bg-transparent"></div>
      ) : (
        <div className="relative">
          <HeroSection />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
