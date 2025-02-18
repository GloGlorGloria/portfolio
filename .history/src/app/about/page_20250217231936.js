import styles from "./about.module.css";
import Image from "next/image";

export default function About() {
  return (
    // <main className="flex min-h-screen flex-col bg-[#fff1df]">
    //   <div className="container mt-24 mx-auto px-10 py-12">
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
                <br></br>
                <div>
                  <p>After relocating from Hong Kong to Vancouver in 2023, I advanced my skills through BCIT’s Digital Design and Development program.</p>
                  <br></br>
                  <p>I specialize in UX/UI design, seamlessly combining tools like Figma and Adobe Creative Suite with front-end development skills in HTML, CSS, and JavaScript. I thrive on solving real-world challenges by creating innovative, human-centered designs and contributing to teams with dedication and adaptability.</p>
                  <br></br>
                  <p>My 5+ years of experience in government and research have sharpened my coordination, problem-solving, and collaboration skills, enabling me to effectively communicate with diverse stakeholders and understand their needs. As a trilingual professional fluent in Cantonese, Mandarin, and English, I offer a unique cross-cultural perspective to digital design</p>
                </div>
              </div>
              </div>
              <div>
            </div>
          </div>
        </section>


        <h2 className={styles.ovewviewTitle}>Overview</h2>
      </div>
    </main>
  );
}
