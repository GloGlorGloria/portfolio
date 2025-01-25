import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
    return (
    <section> 
        <h1 className={styles['greeting']}>Hello, I'm Gloria CHAN!</h1>
        {/* text-[#1f2456] mb-4 text-6xl font-extrabold */}
        <p className={styles['description']}>
            combines <span className={styles['span']}>R</span>esilience, <span className={styles['span']}>I</span>nnovation, and <span className={styles['span']}>A</span>daptability to create human-centered designs with infinite possibilities.
        </p>

    </section>
    );
};

export default HeroSection;