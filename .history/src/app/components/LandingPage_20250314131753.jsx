"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LandingPage = ({ onIntroComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
        setIsVisible(false);
        onIntroComplete(); // Notify parent
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onIntroComplete]);

  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center text-center bg-[#fdf6ec] w-full fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
      transition={{ duration: 0.8 }}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      {/* Title & Meaning */}
      <motion.h1 className="text-6xl font-bold tracking-wide"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}>
        GloGlorGloria
      </motion.h1>

      <motion.p className="text-xl mt-4 text-gray-600"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2, delay: 0.3 }}>
        <span className="text-[#ff6b6b] font-semibold">Resilience</span>, 
        <span className="text-[#6b6bff] font-semibold"> Innovation</span>, and 
        <span className="text-[#6bff6b] font-semibold"> Adaptability</span>
      </motion.p>

      {/* 🔻 Scroll Prompt */}
      <motion.div className="absolute bottom-12 flex flex-col items-center text-gray-500"
        initial={{ opacity: 1 }} 
        animate={{ opacity: isVisible ? 1 : 0 }} 
        transition={{ duration: 0.5 }}>
        <p className="text-sm">Scroll to explore</p>
        <motion.div className="w-6 h-6 border-b-2 border-r-2 rotate-45"
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1 }} />
      </motion.div>

      {/* 🔹 Skip Button */}
      <button 
        onClick={() => { setIsVisible(false); onIntroComplete(); }}
        className="absolute bottom-4 bg-black text-white px-6 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
      >
        Skip Intro
      </button>
    </motion.div>
  );
};

export default LandingPage;
