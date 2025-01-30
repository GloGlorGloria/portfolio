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
                This F1 poster series features three prominent drivers and their notable Grand Prix victories in 2024. Each poster focuses on a key moment of triumph, using bold visuals and thoughtful design to reflect the energy of the race and the driver’s individual achievements in the season.This F1 poster series showcases three prominent drivers and their unforgettable Grand Prix victories in 2024. Each poster highlights a defining moment of triumph, using bold visuals and thoughtful design to tell the story of each driver's journey and their impact on the global F1 stage.
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
                This series highlights each F1 driver and their car with bold contrasts and vibrant, saturated colors, amplifying their energy. In contrast, desaturated backgrounds of iconic Grand Prix locations subtly anchor each piece without competing for attention. This deliberate balance of saturation and desaturation creates depth, ensuring a clear visual hierarchy that keeps the focus on the action.
                </p>
                <br></br>
                <p className={styles.projectSummary}>
                Neon accents, gradients, and noise effects further enhance the sleek, high-energy aesthetic, mirroring the speed and innovation of F1. Every detail is crafted to immerse viewers in the adrenaline-charged atmosphere of the race, blending sport, culture, and artistry into a striking visual celebration.
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
                  src="/images/F1_Bustop.png"
                  alt="F1 bus stop poster"
                  width={800}
                  height={400}
                  className={styles.projectImage_Special}
                />
            </div>
            <div className={styles.additionalImagesGrid}>
              <Image
                src="/images/Max.png"
                alt="F1-driver Max Verstappen"  
                width={800}
                height={400}
                className={styles.projectImage}
              />
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
            </div>
        </div>
      </div>
    </main>
  );
}
