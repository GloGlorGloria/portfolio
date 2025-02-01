import React from 'react';
import styles from "./AboutSection.module.css";

const AboutSection = () => {
    return (
        <section>
            <div className={styles.about__container}>
                <h1>About Section</h1>
                <p>This is the about section of the portfolio.</p>
            </div>
        </section>

    );
};

export default AboutSection;