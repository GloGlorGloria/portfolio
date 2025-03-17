"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { FaAddressCard } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setIsScrolledPast(true);
      } else {
        setIsScrolledPast(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      {/* 🚀 Fullscreen Landing Page */}
      <motion.div
        className="h-screen flex flex-col items-center justify-center text-center bg-[#fdf6ec] w-full fixed top-0 left-0 right-0 z-20"
        initial={{ opacity: 1 }}
        animate={{ opacity: isScrolledPast ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        style={{ pointerEvents: isScrolledPast ? "none" : "auto" }}
      >
        <motion.h1
          className="text-6xl font-bold tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          GloGlorGloria
        </motion.h1>
        <motion.p
          className="text-xl mt-4 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <span className="text-[#ff6b6b] font-semibold">Resilience</span>,{" "}
          <span className="text-[#6b6bff] font-semibold">Innovation</span>, and{" "}
          <span className="text-[#6bff6b] font-semibold">Adaptability</span>
        </motion.p>

        {/* 🔻 Scroll Prompt */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center text-gray-500"
          initial={{ opacity: 1 }}
          animate={{ opacity: isScrolledPast ? 0 : 1 }}
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

      {/* 🔥 Hero Section Appears Normally */}
      <div className="relative min-h-screen">
        <div className="grid place-items-center grid-cols-1 py-28 sm:grid-cols-12 mb-16 sm:mb-4">
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

            <p className={styles.description}>
              combines <span className={styles.span}>Resilience</span>,{" "}
              <span className={styles.span}>Innovation</span>, and{" "}
              <span className={styles.span}>Adaptability</span> to create
              human-centered designs with{" "}
              <span className={styles.span}>infinite possibilities</span>.
            </p>

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

          <div className="col-span-5 justify-self-end mt-4 lg:mt-0">
            <Image
              className={styles.logo}
              src="/Logo.png"
              alt="My Logo"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
