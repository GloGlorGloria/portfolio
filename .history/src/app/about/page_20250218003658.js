"use client";
import styles from "./about.module.css";
import Image from "next/image";
import React, { useTransition, useState } from 'react';
import TabButton from "../components/TabButton";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className={styles.hoverEffect}>
        <ul className="list-disc pl-2 space-y-1">
          <li>Adobe Creative Suite</li>
          <li>Figma, User research, Usability Testing</li>
          <li>Google Analytics, Branding, Content strategy</li>
          <li>HTML & CSS, JavaScript, WordPress, React, Agile Methodology</li>
        </ul>
      </div>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className={styles.hoverEffect}>
        <ul className="list-disc pl-2 space-y-4">
          <li> Digital Design and Development Diploma,<br />British Columbia Institute of Technology (BCIT)</li>
          <li> Bachelor of Arts (Honours) in Social Policy & Administration, <br />The Hong Kong Polytechnic University </li>
        </ul>
      </div>
    )
  },
  {
    title: "Work Experience",
    id: "work-experience",
    content: (
      <div className={styles.hoverEffect}>
        <ul className="list-disc pl-2 space-y-2">
          <li> Information Officer (Media Liaison), <br /> The Fire Services Department, Hong Kong Government </li>
          <li> Assistant Information Officer, <br /> The Information Services Department, Hong Kong Government </li>
          <li> Research Assistant, <br /> The Hong Kong Polytechnic University </li>
        </ul>
      </div>
    )
  },
  {
    title: "Languages",
    id: "languages",
    content: (
      <div className={styles.hoverEffect}>
        <ul className="list-disc pl-2 space-y-2">
          <li> English (Fluent)</li> 
          <li> Cantonese (Native)</li> 
          <li> Mandarin (Fluent)</li>
        </ul>
      </div>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <section className={styles.sectionContainer}>
          <div className={styles.projectDetails}>
            {/* Left Column: Large Image */}
            <div className={styles.leftColumn}>
              <Image
                src="/images/Portrait.png"
                alt="My portrait"
                width={800}
                height={400}
                className={styles.largeImage}
              />
            </div>

            {/* Right Column: Project Details */}
            <div className={styles.rightColumn}>
              <div className={styles.sections}>
                <h1 className={styles.infoTitle}>Hello, I am Gloria!</h1>
                <h4 className={styles.projectSummary}>
                  I’m a digital design professional transitioning from government communications to tech innovation with a passion for creating meaningful, user-centered solutions.
                </h4>
                <br />
                <div>
                  <p className="text-justify">
                    After relocating from Hong Kong to Vancouver in 2023, I advanced my skills through BCIT’s Digital Design and Development program.
                  </p>
                  <br />
                  <p className="text-justify">
                    I specialize in UX/UI design, seamlessly combining tools like Figma and Adobe Creative Suite with front-end development skills in HTML, CSS, and JavaScript. I thrive on solving real-world challenges by creating innovative, human-centered designs and contributing to teams with dedication and adaptability.
                  </p>
                  <br />
                  <p className="text-justify">
                    My 5+ years of experience in government and research have sharpened my coordination, problem-solving, and collaboration skills, enabling me to effectively communicate with diverse stakeholders and understand their needs. As a trilingual professional fluent in Cantonese, Mandarin, and English, I offer a unique cross-cultural perspective to digital design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h2 className={styles.overviewTitle}></h2>

        <section className={styles.sectionContainer}>
          <div className={styles.profileMore}>
            <h1>In my leisure time...</h1>
            <p className="mt-4 text-lg">
              I enjoy brewing Chinese tea to unwind and refresh my mind, as well as going on road trips to explore the beauty of Canada and nearby places.
            </p>
          </div>

          <div className={styles.gallery}>
            <Image src="/images/teaset.JPG" alt="Tea" width={380} height={250} />
            <Image src="/images/brewtea.png" alt="Tea" width={380} height={250} />
            <Image src="/images/teaset2.png" alt="Tea" width={380} height={250} />
          </div>
          <div className={styles.gallery}>
            <Image src="/images/banff.jpg" alt="Tea" width={380} height={250} />
            <Image src="/images/seattle.JPG" alt="Tea" width={380} height={250} />
            <Image src="/images/snow.jpg" alt="Tea" width={380} height={250} />
          </div>
        </section>

        <div className="flex flex-row mt-8 space-x-2">
          {TAB_DATA.map((t) => (
            <TabButton 
              key={t.id}
              selectTab={() => handleTabChange(t.id)} 
              active={tab === t.id}
            >
              {t.title}
            </TabButton>
          ))}
        </div>

        <div className="mt-8">
          {TAB_DATA.find((t) => t.id === tab)?.content || <p>No content available.</p>}
        </div>
      </div>
    </main>
  );
};

export default AboutSection;
