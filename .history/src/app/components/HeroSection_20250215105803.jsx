"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import { GoArrowUpRight } from "react-icons/go";
import { FaAddressCard } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Granim from "granim";
import Link from "next/link";

const HeroSection = () => {
    useEffect(() => {
        // Initialize Granim.js after component mounts
        new Granim({
            element: "#logo-canvas",
            direction: "left-right",
            isPausedWhenNotInView: true,
            states: {
                "default-state": {
                    gradients: [
                        ["#EB3349", "#F45C43"],
                        ["#FF8008", "#FFC837"],
                        ["#4CB8C4", "#3CD3AD"],
                        ["#24C6DC", "#514A9D"],
                        ["#FF512F", "#DD2476"],
                        ["#DA22FF", "#9733EE"],
                    ],
                    transitionSpeed: 2000,
                },
            },
        });
    }, []);

    return (
        <section>
            <div className="grid place-items-center grid-cols-1 py-28 sm:grid-cols-12 mb-16">
                {/* Left Content */}
                <div className="col-span-7 place-self-center">
                    <h1 className={styles.greeting__container}>
                        <span className={styles.greeting}>Hello, I'm {" "}</span>
                        <br></br>
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
                        Combines <span className={styles.span}>Resilience</span>,{" "}
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
                                <span className="block bg-[#fff0df] hover:bg-orange-100 rounded-full px-5 py-2">
                                    More about me <FaAddressCard />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right - Logo with Gradient Mask */}
                <div className="col-span-5 justify-self-end mt-4 lg:mt-0 relative">
                    {/* Gradient Canvas */}
                    <canvas
                        id="logo-canvas"
                        className={styles.gradientCanvas}
                    ></canvas>
                    {/* Image Mask */}
                    <Image
                        className={styles.logo}
                        src="/Logo.png"
                        alt="My Logo"
                        width={500}
                        height={300}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
