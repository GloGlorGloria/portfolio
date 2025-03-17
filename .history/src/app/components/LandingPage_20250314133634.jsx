"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./LandingPage.module.css";

const LandingPage = ({ onExit }) => {
  const [isLeaving, setIsLeaving] = useState(false);

  const handleScroll = () => {
    setIsLeaving(true);
    setTimeout(onExit, 1000); // Delay to allow exit animation
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <motion.div
      className={styles.landing}
      initial={{ opacity: 1 }}
      animate={{ opacity: isLeaving ? 0 : 1, y: isLeaving ? -50 : 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 className={styles.title} whileHover={{ scale: 1.1 }}>
        GloGlorGloria
      </motion.h1>
      <p className={styles.hint}>What’s hidden in GloGlorGloria? Hover to uncover!</p>

      <div className={styles.interactive}>
        <motion.span whileHover={{ scale: 1.2, color: "#ff6347" }}>R</motion.span> → Resilience
        <motion.span whileHover={{ scale: 1.2, color: "#1e90ff" }}>I</motion.span> → Innovation
        <motion.span whileHover={{ scale: 1.2, color: "#32cd32" }}>A</motion.span> → Adaptability
      </div>

      <motion.p className={styles.scrollHint} animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
        Scroll down to explore
      </motion.p>
    </motion.div>
  );
};

export default LandingPage;
