"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { FaAddressCard } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const [hoveredLetters, setHoveredLetters] = useState({ R: false, I: false, A: false });

  const handleHover = (letter) => {
    setHoveredLetters((prev) => ({ ...prev, [letter]: true }));
  };

  const allHovered = hoveredLetters.R && hoveredLetters.I && hoveredLetters.A;

  return (
    <section>
      <div className="grid place-items-center grid-cols-1 py-28 sm:grid-cols-12 mb-16 sm:mb-4">
        {/* Left Content */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className={styles.greeting__container}>
            <span className={styles.greeting}>Hello, I'm </span>
            <br />
            <TypeAnimation
              sequence={[
                "Gloria Chan",
                1000,
                "UX/UI Designer",
                1000,
                "Digital Marketer",
                1000,
                "Project Manager",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          {/* Hover Reveal Effect */}
          <div className="flex justify-center sm:justify-start mt-4 space-x-2 text-4xl font-bold">
            {["R", "I", "A"].map((letter, index) => (
              <motion.span
                key={index}
                onMouseEnter={() => handleHover(letter)}
                className="cursor-pointer relative"
                initial={{ y: 0, opacity: 1 }}
                animate={
                  hoveredLetters[letter]
                    ? { y: -10, scale: 1.2, color: "#ff6b6b" }
                    : { y: 0, scale: 1, color: "#000" }
                }
                transition={{ duration: 0.3 }}
              >
                {letter}
                {hoveredLetters[letter] && (
                  <motion.span
                    className="absolute top-full text-sm text-gray-500"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {letter === "R" ? "Resilience" : letter === "I" ? "Innovation" : "Adaptability"}
                  </motion.span>
                )}
              </motion.span>
            ))}
          </div>

          {/* Infinity Loop Animation when all hovered */}
          {allHovered && (
            <motion.div
              className="mt-4 text-xl text-gray-600 font-medium"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              All Together... ♾️
            </motion.div>
          )}

          <p className={styles.description}>
            combines <span className={styles.span}>Resilience</span>,{" "}
            <span className={styles.span}>Innovation</span>, and{" "}
            <span className={styles.span}>Adaptability</span> to create human-centered designs with{" "}
            <span className={styles.span}>infinite possibilities</span>.
          </p>

          {/* Buttons */}
          <div className={styles.buttons}>
            <Link href="/projects" passHref>
              <button className={styles.button__left}>
                See my work <GoArrowUpRight className={styles.goArrow} />
              </button>
            </Link>
            <Link href="/about" passHref>
              <button className={styles.button__right}>
                <span className="block bg-[#fff0df] rounded-full px-5 py-2">
                  More about me <FaAddressCard className={styles.flipIcon} />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-span-5 justify-self-end mt-4 lg:mt-0">
          <Image className={styles.logo} src="/Logo.png" alt="My Logo" width={500} height={300} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
