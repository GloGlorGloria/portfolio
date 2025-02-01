import React from 'react';
import Image from 'next/image';
import styles from "./AboutSection.module.css";

const AboutSection = () => {
    return (
        <section>
            {/* <div className={styles.about__container}> */}
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl: gap-16 sm:py-16 xl:px-16">
                <Image src={"/images/aboutme.webp"} alt="An AI generated picture for Gloria." width={500} height={500}/>
                <div>
                    <h2 className="font-bold mb-4">About Me</h2>
                    <p>I’m a digital design professional transitioning from government communications to tech innovation with a passion for creating meaningful, user-centered solutions. </p>
                    <div className="flex flex-row mt-8"></div>
                </div>
                <h1>About Section</h1>
                <p>This is the about section of the portfolio.</p>
            </div>
        </section>

    );
};

export default AboutSection;