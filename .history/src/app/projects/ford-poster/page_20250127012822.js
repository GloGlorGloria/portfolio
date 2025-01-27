import Image from "next/image";
import styles from "./ford.module.css";
import Link from "next/link";

import { FaTruckPickup } from "react-icons/fa6";
import { DiProlog } from "react-icons/di";

export default function f1Poster() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.projectTitle}>
          <h1 className={styles.project__primaryTitle} >Graphic Design <FaTruckPickup className={styles.carIcon}/></h1>
          <div className={styles.brandIcons}>
          <Image
                src="/images/NationalMusuem.svg"
                alt="National Canadian Museum of History logo"
                width={800}
                height={400}
                className={styles.brandIcon}
          />
           <Image
                src="/images/ford.svg"
                alt="Ford logo"
                width={800}
                height={400}
                className={styles.brandIconSmall}
          />
          </div>
        </div>

        {/* Project Details */}
        <section className={styles.sectionContainer}>
          <div className={styles.projectDetails}>
            {/* Left Column: Large Image */}
            <div className={styles.leftColumn}>
              <Image
                src="/images/Ford_station.jpg"
                alt="Ford eAdvert in station"
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
                This project is a digital advertisement created for the National Canadian Museum of History to promote an upcoming exhibition, "FORDward: Driving Through Time." The exhibition highlights the evolution of Ford automobiles over 121 years, showcasing the company's innovations and its impact on transportation history. 
                </p>
              </div>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Design Tool</h2>
                <ul className={styles.skillsList}>
                  <li>
                    <Image src="/icons/Illustrator.svg" alt="Adobe Illustrator Icon" width={40} height={40} />
                  </li>
                  <li>
                    <Image src="/icons/Photoshop.svg" alt="Adobe Photoshop Icon" width={40} height={40} />
                  </li>
                </ul>
              </div>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Skills</h2>
                <ul className={styles.skillsList}>
                  <li className={styles.skillsItem}>Graphic Design</li>
                  <li className={styles.skillsItem}>Content Design</li>
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
                The eAdvert merges five iconic Ford vehicles from different eras into a cohesive visual, showcasing the evolution of Ford's designs and innovations. Arranged chronologically from the 1908 Model T to the 2024 F-150 Raptor, the vehicles symbolize Ford's enduring journey through time and its continuous drive for progress. Designed to captivate audiences across digital platforms, the ad highlights Ford's rich legacy and unwavering commitment to shaping the future of transportation.  
                <span className={styles.slogan}> Ford keeps moving forward!</span>
                </p>
              </div>
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
                <Image
                  src="/images/Ford_iPad.jpg"
                  alt="Ford eAdvert on iPad"
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
                  src="/images/Fordward_Mac.jpg"
                  alt="Ford poster on Macbook"
                  width={800}
                  height={400}
                  className={styles.projectImage_Special}
                />
               
            </div>
            <div className={styles.additionalImagesGrid}>
                <Image
                  src="/images/Fordward_vertical.png"
                  alt="Ford poster"
                  width={800}
                  height={400}
                  className={styles.projectImage_Special}
                />
              <Image
                src="/images/Fordward_board.jpg"
                alt="Ford poster on board"
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
