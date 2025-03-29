"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import styles from "./LandingPage.module.css";
import SplineBackground from "./SplineBackground";

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

          <motion.h1
            className={styles.heading}
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            GloGlo
            <motion.span
              className={`${styles.hanging} ${styles.gradient}`}
              whileHover={{ scale: 1.2 }}
              animate={{ rotate: [-10, 10, -10], y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 2 }}
              onMouseEnter={() => setHoverWord("Resilience")}
              onMouseLeave={() => setHoverWord("")}
            >
              r
            </motion.span>
            Glor
            <motion.span
              className={`${styles.hanging} ${styles.gradient}`}
              whileHover={{ opacity: [0.6, 1, 0.6], scale: 1.1 }}
              transition={{ repeat: Infinity, duration: 0.4 }}
              onMouseEnter={() => setHoverWord("Innovation")}
              onMouseLeave={() => setHoverWord("")}
            >
              i
            </motion.span>
            <motion.span
              className={`${styles.hanging} ${styles.gradient}`}
              whileHover={{ scale: [1, 1.1, 1], borderRadius: "20%" }}
              transition={{ repeat: Infinity, duration: 1 }}
              onMouseEnter={() => setHoverWord("Adaptability")}
              onMouseLeave={() => setHoverWord("")}
            >
              a
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl mt-4 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {hoverWord ? <span className="font-semibold">{hoverWord}</span> : (
              <>
                <span className="text-[#ff6b6b] font-semibold">Resilience</span>,
                <span className="text-[#6b6bff] font-semibold"> Innovation</span>, and
                <span className="text-[#1d841d] font-semibold"> Adaptability</span>
              </>
            )}
          </motion.p>

          <motion.div
            className="absolute bottom-12 flex flex-col items-center text-gray-500"
            initial={{ opacity: 1 }}
            animate={{ opacity: isIntroComplete ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm">A</p>
            <motion.div
              className="w-6 h-6 border-b-2 border-r-2 rotate-45"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
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
