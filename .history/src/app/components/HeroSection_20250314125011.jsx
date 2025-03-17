"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black text-white text-center">
      {/* GloGlorGloria Text */}
      <motion.h1
        className="text-6xl font-bold relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        GloGlorGloria
      </motion.h1>

      {/* Interactive Hover Message */}
      <motion.p
        className="mt-4 text-lg cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {"What’s hidden in GloGlorGloria? "}
        <motion.span className="underline">
          Hover to uncover!
        </motion.span>
      </motion.p>

      {/* Hover Interaction: R I A Meanings */}
      <div className="mt-8 flex gap-6 text-4xl">
        {["R", "I", "A"].map((letter, index) => (
          <motion.span
            key={letter}
            className="cursor-pointer font-extrabold relative"
            onMouseEnter={() => setHoveredLetter(letter)}
            onMouseLeave={() => setHoveredLetter(null)}
            whileHover={{ scale: 1.2, color: "#FFD700" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {letter}
            {/* Tooltip on Hover */}
            {hoveredLetter === letter && (
              <motion.span
                className="absolute -bottom-12 text-sm bg-white text-black px-3 py-1 rounded-md shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {letter === "R" && "Resilience: Adapting to change."}
                {letter === "I" && "Innovation: Creating impact."}
                {letter === "A" && "Adaptability: Evolving constantly."}
              </motion.span>
            )}
          </motion.span>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="mt-10 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p>All together…</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          ⬇
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
