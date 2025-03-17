"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Prevent scrolling when LandingPage is visible
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling after it disappears
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen bg-[#fff1df] flex flex-col items-center justify-center text-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-5xl font-bold">GloGlorGloria</h1>
      <p className="mt-4 text-lg">What's hidden in GloGlorGloria? Hover to uncover!</p>

      {/* Interactive Elements */}
      <div className="mt-6 text-3xl font-bold space-x-4">
        <span className="hover:text-red-500 transition-all">R → Resilience</span>
        <span className="hover:text-blue-500 transition-all">I → Innovation</span>
        <span className="hover:text-green-500 transition-all">A → Adaptability</span>
      </div>

      <motion.p
        className="mt-6 text-xl opacity-0"
        animate={{ opacity: 1, y: [-10, 0] }}
        transition={{ delay: 1 }}
      >
        All together… infinite possibilities.
      </motion.p>

      <div className="absolute bottom-10">
        <p className="text-lg text-gray-600">Scroll down to explore</p>
        <motion.div
          className="w-6 h-6 mt-2 animate-bounce"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          ⬇
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
