"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";
import HeroSection from "./HeroSection";
import SplineBackground from "./SplineBackground";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [hoverWord, setHoverWord] = useState("");
  const [showScrollPrompt, setShowScrollPrompt] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");
  const [showFinalScrollPrompt, setShowFinalScrollPrompt] = useState(false);
  const fullMessage = "Resilience + Innovation + Adaptability = Gloria Chan with infinite possibility";

  useEffect(() => {
    const handleScroll = () => {
      setIsIntroComplete(true);
      setTimeout(() => setShowScrollPrompt(true), 2000);
      setTimeout(() => setShowFinalMessage(true), 3500);
      setTimeout(() => setShowFinalScrollPrompt(true), 7500);
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

  useEffect(() => {
    if (showFinalMessage && typedMessage.length < fullMessage.length) {
      const timeout = setTimeout(() => {
        setTypedMessage(fullMessage.slice(0, typedMessage.length + 1));
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [showFinalMessage, typedMessage]);

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

          <motion.p className="mb-4 text-lg text-gray-700 italic">
            What’s hidden in GloGlorGloria? Hover to uncover!
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
              whileHover={{ scale: 1.2 }}
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
            <p className="text-sm">Scroll down</p>
            <FaAnglesDown className="text-[var(--accent)] w-12 h-auto mx-auto flex justify-center items-center mb-32 animate-bounce" />
          </motion.div>
        </motion.div>
      )}

      <div className={`transition-opacity duration-1000 ${isIntroComplete ? "opacity-100" : "opacity-0"}`}>
        <HeroSection />
      </div>

      {showScrollPrompt && (
        <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 text-center text-lg font-semibold text-gray-700 z-50">
          ✨ All together...
        </div>
      )}

      {showFinalMessage && (
        <div className="fixed inset-x-0 bottom-24 text-center text-xl font-semibold text-gray-800 z-50 transition-opacity duration-1000">
          <span className="animate-typing inline-block whitespace-nowrap overflow-hidden border-r-2 border-gray-800 pr-2">
            {typedMessage}
          </span>
        </div>
      )}

      {showFinalScrollPrompt && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 z-50 animate-bounce">
          Scroll to discover my work.
        </div>
      )}
    </div>
  );
};

export default LandingPage;
