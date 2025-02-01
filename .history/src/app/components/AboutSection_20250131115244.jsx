"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import styles from "./AboutSection.module.css";
import TabButton from './TabButton';

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section>
            {/* <div className={styles.about__container}> */}
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl: gap-16 sm:py-16 xl:px-16">
                <Image src={"/images/aboutme.webp"} alt="An AI generated picture for Gloria." width={500} height={500}/>
                <div>
                    <h2 className="font-bold mb-4">About Me</h2>
                    <p>I’m a digital design professional transitioning from government communications to tech innovation with a passion for creating meaningful, user-centered solutions. </p>
                <div className="flex flex-row mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <span className={styles.about__span}>Skills</span>
                        <span>Education</span>
                        <span>Work Experience</span>
                        <span>Design Philosophy</span>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AboutSection;