import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
    return (
    <section> 
        <h1 className={styles['greeting']}>
            Hello, I'm Gloria CHAN!
        </h1>
        <p className={styles['description']}>
            combines <span className={styles['span']}>R</span>esilience, <span className={styles['span']}>I</span>nnovation, and <span className={styles['span']}>A</span>daptability to create human-centered designs with <span className={styles['span']}>infinite possibilities</span>.
        </p>
    </section>
    );
};

export default HeroSection;