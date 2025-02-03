"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import styles from "./AboutSection.module.css";
import TabButton from './TabButton';
import { PiArrowBendDownRightFill } from "react-icons/pi";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2 space-y-1">
                <li>Adobe Creative Suite</li>
                <li>Figma, User research, Usability Testing</li>
                <li>Google Analytics, Branding, Content strategy</li>
                <li>HTML & CSS, JavaScript, WordPress, React, Agile Methodology</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2 space-y-4">
                <li> Digital Design and Development Diploma,<br></br>British Columbia Institute of Technology (BCIT)</li>
                <li> Bachelor of Arts (Honours) in Social Policy & Administration, <br></br>The Hong Kong Polytechnic University </li>
            </ul>
        )
    },
    {
        title: "work experience",
        id: "work experience",
        content: (
            <ul className="list-disc pl-2 space-y-2">
                <li> Information Officer (Media Liaison), 
                    <br></br>
                    The Fire Services Department, Hong Kong Government </li>
                <li> Assistant Information Officer, 
                    <br></br>
                    The Information Services Department, Hong Kong Government </li>
                <li> Research Assistant, 
                    <br></br>
                    The Hong Kong Polytechnic University </li>
            </ul>
        )
    }
]
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
                <div>
                    <Image src={"/images/aboutme.gif"} alt="A winking gif with smile ." width={500} height={500}/>
                    <p><PiArrowBendDownRightFill /> Click to know more about me!</p>
                </div>
                
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="font-bold mb-4">About Me</h1>
                    <p className="lg:text-justify sm:text-left">I’m a digital designer with a background in government communications and research, crafting human-centered experiences in UX/UI, graphic design, and digital marketing. I thrive on solving problems, understanding people’s stories, and collaborating with teams to create meaningful solutions. With a cross-cultural perspective, I bring adaptability and innovation to every project. </p>
                <div className="flex flex-row mt-8 space-x-2">
                    <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}
                    >
                        {" "}
                        Skills{" "}
                    </TabButton>

                    <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>

                    <TabButton 
                        selectTab={() => handleTabChange("work experience")} 
                        active={tab === "work experience"}
                    >
                        {" "}
                        Work Experience{" "}
                    </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>

    );
};

export default AboutSection;