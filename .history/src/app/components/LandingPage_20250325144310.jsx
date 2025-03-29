"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsIntroComplete(true);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleScroll);
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {!isIntroComplete && (
        <motion.div
          className="h-screen w-full fixed top-0 left-0 flex flex-col items-center justify-center text-center bg-[#fdf6ec] z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: isIntroComplete ? 0 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className={`}
            initial={{ y: -150, opacity: 0 }} 
            animate={{
              y: 0,
              opacity: 1,
              rotate: [0, -10, 10, -10, 0], 
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
          >
            GloGlo
            <motion.span
              className={`${styles.hanging} ${styles.gradient}`}
              animate={{
                rotate: [-10, 10, -10], 
                y: [0, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
                delay: 2, 
              }}
            >
              r
            </motion.span>
            Glor
            <motion.span
                className={`${styles.hanging} ${styles.gradient}`}
              animate={{
                rotate: [-5, 5, -5], 
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              i
            </motion.span>
            <motion.span
                className={`${styles.hanging} ${styles.gradient}`}
              animate={{
                rotate: [-5, 5, -5], 
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              a
            </motion.span>
          </motion.h1>

          {/* Subtitle with Colored Words */}
          <motion.p
            className="text-xl mt-4 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <span className="text-[#ff6b6b] font-semibold">Resilience</span>,
            <span className="text-[#6b6bff] font-semibold"> Innovation</span>, and
            <span className="text-[#1d841d] font-semibold"> Adaptability</span>
          </motion.p>

          {/* Scroll Down Hint */}
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
