"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

const LandingPage = () => {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setIsIntroComplete(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Fullscreen Landing Page (Non-fixed, so natural scroll works) */}
      <motion.div
        className="h-screen flex flex-col items-center justify-center text-center bg-[#fdf6ec] w-full"
        initial={{ opacity: 1 }}
        animate={{ opacity: isIntroComplete ? 0 : 1 }}
        transition={{ duration: 0.8 }}
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

      {/* Hero Section starts naturally at the top after the LandingPage */}
      <HeroSection />
    </div>
  );
};

export default LandingPage;
