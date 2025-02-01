import React from 'react';
import Image from 'next/image';
import styles from "./AboutSection.module.css";

const AboutSection = () => {
    return (
        <section>
            {/* <div className={styles.about__container}> */}
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl: gap-16 sm:py-16 xl:px-16">
                <h1>About Section</h1>
                <p>This is the about section of the portfolio.</p>
            </div>
        </section>

    );
};

export default AboutSection;