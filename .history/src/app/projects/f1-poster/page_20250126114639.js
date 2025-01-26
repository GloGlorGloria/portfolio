import Image from "next/image";
import styles from "./f1-poster.module.css";
import Link from "next/link";

import { PiEyesFill } from "react-icons/pi";
import { IoCarSport } from "react-icons/io5";
import { DiProlog } from "react-icons/di";

export default function f1Poster() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.projectTitle}>
          <h1 className={styles.project__primaryTitle} >Graphic Design <IoCarSport className={styles.carIcon}/></h1>
          <Image
                src="/images/F1.svg"
                alt="F1 logo"
                width={800}
                height={400}
                className={styles.brandIcon}
          />
        </div>

        {/* Project Details */}
        <section className={styles.sectionContainer}>
          <div className={styles.projectDetails}>
            {/* Left Column: Large Image */}
            <div className={styles.leftColumn}>
              <Image
                src="/images/F1_indoor.png"
                alt="F1 posters"
                width={800}
                height={400}
                className={styles.largeImage}
              />
            </div>

            {/* Right Column: Project Details */}
            <div className={styles.rightColumn}>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Summary</h2>
                <p className={styles.projectSummary}>
                This graphic design project showcases a series of F1 posters featuring three prominent drivers celebrating their Grand Prix victories in 2024. The posters highlight each driver's unique moment of triumph. Created to capture the excitement of the sport and its global stage, this series uses bold visuals and thoughtful design to tell each driver’s story.
                </p>
              </div>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Design Tool</h2>
                <ul className={styles.skillsList}>
                  <li>
                    <Image src="/icons/Photoshop.svg" alt="Adobe Photoshop Icon" width={40} height={40} />
                  </li>
                </ul>
              </div>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Skills</h2>
                <ul className={styles.skillsList}>
                  <li className={styles.skillsItem}>Graphic Design</li>
                </ul>
              </div>
            </div>
            <div>
            </div>
          </div>
        </section>

        <section className={styles.sectionContainer}>
            <div className={styles.projectDetails}>
            <div className={styles.leftColumn}>
              <div className={styles.sections}>
                <h1 className={styles.sectionTitle}>Design Concept <DiProlog className={styles.designIcon}/></h1>
                <p className={styles.projectSummary}>
                The design emphasizes the central figures—each F1 driver and their car—using high contrast and vibrant colors to draw attention and convey a sense of power and motion. To complement the dynamic foreground, the background incorporates desaturated imagery of iconic scenic spots from the respective Grand Prix locations, serving as subtle nods to the global stage of the competition.
                </p>
                <br></br>
                <p className={styles.projectSummary}>
                Neon colors, gradients, and noise effects add layers of texture and modernity, creating a striking visual style that reflects the high-tech, high-speed world of F1. These design choices aim to immerse the audience in the atmosphere of the race while celebrating the fusion of sport, culture, and artistry.
                </p>
              </div>
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
                <Image
                  src="/images/F1_thumbnail.png"
                  alt="F1 posterts mockup"
                  width={800}
                  height={400}
                  className={styles.largeImage}
                />
              </div>
            </div>
        </section>

        {/* Additional Project Images */}
        <div className={styles.additionalImages}>
            <div>
                <Image
                  src="/images/Max.png"
                  alt="F1-driver Max Verstappen"
                  width={800}
                  height={400}
                  className={styles.projectImage_Special}
                />
            </div>
            <div className={styles.additionalImagesGrid}>
              <Image
                src="/images/Norris revised.png"
                alt="F1-driver Lando Norris"
                width={800}
                height={400}
                className={styles.projectImage}
              />
              <Image
                src="/images/Lewis.png"
                alt="F1-driver Lewis Hamilton"
                width={800}
                height={400}
                className={styles.projectImage}
              />
              <Image
                src="/images/magazine_content.png"
                alt="Magazine Content"
                width={800}
                height={400}
                className={styles.projectImage}
              />
            </div>
        </div>
      </div>
    </main>
  );
}
