import Image from "next/image";
import styles from "./magazine.module.css";

export default function EMagazineProject() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div>
          <h1 className={styles.projectTitle}>Print & E-Magazine</h1>
        </div>
        

        {/* Project Details */}
        <div className={styles.projectDetails}>
          {/* Left Column: Large Image */}
          <div className={styles.leftColumn}>
            <Image
              src="/images/magazine_thumbnail.png"
              alt="Print & E-Magazine"
              width={600}
              height={400}
              className={styles.largeImage}
            />
          </div>

          {/* Right Column: Project Details */}
          <div className={styles.rightColumn}>
            <h2 className={styles.sectionTitle}>Summary</h2>
            <p className={styles.projectSummary}>
              This is a brief summary of the project. It showcases the design and development of both print and digital versions of a magazine, focusing on layout, typography, and user experience.
            </p>

            <h2 className={styles.sectionTitle}>Skills Used</h2>
            <ul className={styles.skillsList}>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Adobe InDesign</li>
              <li>Web Development</li>
            </ul>
          </div>
        </div>

        {/* Additional Project Images */}
        <div className={styles.additionalImages}>
          <div className={styles.imagesGrid}>
            <div>
              <Image
                src="/images/another_image1.png"
                alt="Additional Image 1"
                width={400}
                height={300}
                className={styles.projectImage}
              />
            </div>
            <div>
              <Image
                src="/images/another_image2.png"
                alt="Additional Image 2"
                width={400}
                height={300}
                className={styles.projectImage}
              />
            </div>
            <div>
              <Image
                src="/images/another_image3.png"
                alt="Additional Image 3"
                width={400}
                height={300}
                className={styles.projectImage}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
