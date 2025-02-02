import Image from "next/image";
import styles from "./can.module.css";
import { GiSodaCan } from "react-icons/gi";

import { IoCarSport } from "react-icons/io5";
import { DiProlog } from "react-icons/di";

export default function f1Poster() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.projectTitle}>
          <h1 className={styles.project__primaryTitle} >Packaging Design<GiSodaCan  className={styles.carIcon}/></h1>
          <Image
                src="/images/projects/cans/Tea Can Logo.svg"
                alt="Tea Can Logo — Tea Master 茶禪一味"
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
                src="/images/projects/cans/3-cans-bg-yellow.png"
                alt="Series of 3 tea cans"
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
                    Tea Master is a premium ready-to-drink tea series that brings the authentic taste of Chinese tea to modern life. Designed for the Canadian market, the packaging features a <span className="text-secondary font-semibold">clear dieline</span> and <span className="text-secondary font-semibold">bilingual English and French labeling</span> for accessibility. More than just a drink, Tea Master blends traditional Chinese values with tea culture, promoting vitality, harmony, and clarity while inviting people to slow down and enjoy a moment of balance in their day.
                </p>
              </div>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Design Tools</h2>
                <ul className={styles.skillsList}>
                  <li>
                    <Image src="/icons/Photoshop.svg" alt="Adobe Photoshop Icon" width={40} height={40} />
                  </li>
                  <li>
                    <Image src="/icons/Illustrator.svg" alt="Adobe Illustrator Icon" width={40} height={40} />
                  </li>
                </ul>
              </div>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Skills</h2>
                <ul className={styles.skillsList}>
                  <li className={styles.skillsItem}>Packaging Design</li>
                  <li className={styles.skillsItem}>Branding</li>
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
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                  The Tea Master series blends Chinese philosophy, nature, and cultural symbolism into a visually captivating and meaningful design.
                  </p>
                </div>
                <div className="mb-4">
                  <ul className="list-disc list-inside text-md">
                    <li className="text-cyan-700">Green Tea (Earth) – Warm yellow with Bamboo, symbolizing harmony and balance.</li>
                    <li>Black Tea (People) – Deep burgundy with Orchid, representing clarity and refinement.</li>
                    <li>White Tea (Sky) – Soft blue with Plum Blossom, signifying vitality and resilience.</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                    Inspired by the Four Gentlemen plants in Chinese culture, the interplay of color and botanical elements ensures that each can is not just packaging but a piece of storytelling, connecting tradition with contemporary aesthetics. By integrating these timeless symbols, the Tea Master series transforms tea drinking into an experience.
                  </p>
                </div>
              </div>
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
                <Image
                  src="/images/projects/F1/F1_thumbnail.png"
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
                  src="/images/Projects/F1/F1_Bustop.png"
                  alt="F1 bus stop poster"
                  width={800}
                  height={400}
                  className={styles.projectImage_Special}
                />
            </div>
            <div className={styles.additionalImagesGrid}>
              <Image
                src="/images/Projects/F1/Max.png"
                alt="F1-driver Max Verstappen"  
                width={800}
                height={400}
                className={styles.projectImage}
              />
              <Image
                src="/images/Projects/F1/Norris revised.png"
                alt="F1-driver Lando Norris"
                width={800}
                height={400}
                className={styles.projectImage}
              />
              <Image
                src="/images/Projects/F1/Lewis.png"
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
