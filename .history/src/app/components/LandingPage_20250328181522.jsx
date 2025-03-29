"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaAnglesDown, FaInfinity } from "react-icons/fa6";
import { FaRegLightbulb, FaHeartbeat } from "react-icons/fa";
import HeroSection from "./HeroSection";
import SplineBackground from "./SplineBackground";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [hoverWord, setHoverWord] = useState("");

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
          <div className="absolute inset-0 -z-10">
            <SplineBackground />
          </div>

          <motion.p className="mb-8 text-lg text-gray-700 italic">
            Wondering what powers me? Hover the swinging letters to discover.
          </motion.p>

          <motion.h1
            className={styles.heading}
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            GloGlo
            <motion.span
              className={`${styles.hanging} ${styles.gradient}`}
              animate={{ rotate: [-10, 10, -10], y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 2 }}
              whileHover={{ scale: 1.2, borderRadius: "20%" }}
              onMouseEnter={() => setHoverWord("Resilience")}
              onMouseLeave={() => setHoverWord("")}
            >
              r
            </motion.span>
            Glor
            <motion.span
              className={`${styles.hanging} ${styles.gradient}`}
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 2 }}
              whileHover={{ opacity: [0.6, 1, 0.6], scale: 1.1 }}
              onMouseEnter={() => setHoverWord("Innovation")}
              onMouseLeave={() => setHoverWord("")}
            >
              i
            </motion.span>
            <motion.span
              className={`${styles.hanging} ${styles.gradient}`}
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 2 }}
              whileHover={{ scale: [1, 1.1, 1], borderRadius: "20%" }}
              onMouseEnter={() => setHoverWord("Adaptability")}
              onMouseLeave={() => setHoverWord("")}
            >
              a
            </motion.span>
          </motion.h1>

          <div className="mt-10 h-10">
            {hoverWord && (
              <motion.p
              className={`text-4xl font-bold tracking-wide flex items-center justify-center gap-2 ${
                hoverWord === 'Resilience'
                  ? 'text-[var(--primary)]'
                  : hoverWord === 'Innovation'
                  ? 'text-[var(--secondary)]'
                  : hoverWord === 'Adaptability'
                  ? 'text-[var(--accent)]'
                  : ''
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {hoverWord}
              {hoverWord === 'Resilience' && <FaHeartbeat />}
              {hoverWord === 'Innovation' && <FaRegLightbulb />}
              {hoverWord === 'Adaptability' && <FaInfinity />}
            </motion.p>
            )}
          </div>

          <motion.div
            className="absolute bottom-12 flex flex-col items-center text-gray-500"
            initial={{ opacity: 1 }}
            animate={{ opacity: isIntroComplete ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm">Scroll down</p>
            <FaAnglesDown className="text-[var(--accent)] w-12 h-auto mx-auto flex justify-center items-center mb-32 animate-bounce" />
          </motion.div>
        </motion.div>
      )}

      <div className={`transition-opacity duration-1000 ${isIntroComplete ? "opacity-100" : "opacity-0"}`}>
        <HeroSection />
      </div>
    </div>
  );
};

export default LandingPage;