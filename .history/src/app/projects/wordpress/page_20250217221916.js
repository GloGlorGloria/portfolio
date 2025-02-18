"use client";
import Image from "next/image";
import styles from "./wordpress.module.css";
import Link from "next/link";


export default function f1Poster() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.projectTitle}>
          <h1 className={styles.project__primaryTitle} >Website Design</h1>
          {/* <div className={styles.brandIcons}>
          <Image
                src="/images/projects/Ford/NationalMusuem.svg"
                alt="National Canadian Museum of History logo"
                width={800}
                height={400}
                className={styles.brandIcon}
          />
           <Image
                src="/images/projects/Ford/ford.svg"
                alt="Ford logo"
                width={800}
                height={400}
                className={styles.brandIconSmall}
          />
          </div> */}
        </div>

        {/* Project Details */}
        <section className={styles.sectionContainer}>
          <div className={styles.projectDetails}>
            {/* Left Column: Large Image */}
            <div className={styles.leftColumn}>
              {/* <Image
                src="/images/projects/Ford/Ford_station.jpg"
                alt="Ford eAdvert in station"
                width={800}
                height={400}
                className={styles.largeImage}
              /> */}
            </div>

            {/* Right Column: Project Details */}
            <div className={styles.rightColumn}>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>More Details are being added!</h2>
                {/* <p className={styles.projectSummary}>
                  This digital advertisement was created for the National Canadian Museum of History to promote the upcoming exhibition <span className={styles.highlight}>FORDward: Driving Through Time</span>. The exhibition highlights the evolution of Ford automobiles over 121 years, showcasing the company's innovations and impact on transportation history.
                </p> */}
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
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
