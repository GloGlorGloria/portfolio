"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaAnglesDown, FaInfinity } from "react-icons/fa6";
import { FaRegLightbulb, FaHeartbeat } from "react-icons/fa";
import { PiShootingStarFill } from "react-icons/pi";
import HeroSection from "./HeroSection";
import SplineBackground from "./SplineBackground";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const [isLandingComplete, setIsLandingComplete] = useState(false);
  const [hoverWord, setHoverWord] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsLandingComplete(true);
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
      {!isLandingComplete && (
        <motion.div
          className={styles.landingContainer}
          initial={{ opacity: 1 }}
          animate={{ opacity: isLandingComplete ? 0 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.spline}>
            <SplineBackground />
          </div>

          <motion.p className={styles.prompt}
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}>
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
                initial={{ scale: 1 }}
                animate={{ rotate: [-10, 10, -10], y: [0, 5, 0], scale: 1 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 2 }}
                whileHover={{ scale: 1.2, transition: { duration: 0.5, ease: 'easeIn' } }}
                whileTap={{ scale: 0.8 }}
                onMouseEnter={() => setHoverWord("Resilience")}
                onMouseLeave={() => setHoverWord("")}
              >
              r
            </motion.span>
            Glor
            <motion.span
              className={`${styles.hanging} ${styles.gradient}`}
              initial={{ scale: 1 }}
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 2 }}
              whileHover={{
                opacity: [0.6, 1, 0.6],
                scale: 1.1,
                transition: {
                  repeat: Infinity,
                  duration: 0.4,
                  ease: "easeInOut"
                }
              }}
              onMouseEnter={() => setHoverWord("Innovation")}
              onMouseLeave={() => setHoverWord("")}
            >
              i
            </motion.span>
            <motion.span
              className={`${styles.hanging} ${styles.gradient}`}
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 2 }}
              whileHover={{
                scale: [1, 1.1, 0.95, 1.05, 1],
                borderRadius: ["0%", "20%", "40%", "20%", "0%"],
                transition: {
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut"
                }
              }}
              onMouseEnter={() => setHoverWord("Adaptability")}
              onMouseLeave={() => setHoverWord("")}
            >
              a
            </motion.span>
          </motion.h1>

          <div className="mt-10 h-10 mb-11">
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
            className="absolute bottom-[-10%] flex flex-col items-center text-primary"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 7 }}
          >
            <motion.p
              className="text-xl mb-8"
              animate={{ color: ["var(--primary)", "var(--secondary)", "var(--accent)"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <PiShootingStarFill 
              animate={{ color: ["var(--primary)", "var(--secondary)", "var(--accent)"] }} /> All together
            </motion.p>
            <FaAnglesDown className={styles.downArrow} />
          </motion.div>
        </motion.div>
      )}

      <div className={`transition-opacity duration-1000 ${isLandingComplete ? "opacity-100" : "opacity-0"}`}>
        <HeroSection />
      </div>
    </div>
  );
};

export default LandingPage;