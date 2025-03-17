"use client";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center bg-[#fff1df]">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        GloGlorGloria
      </motion.h1>

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
    </div>
  );
};

export default LandingPage;
