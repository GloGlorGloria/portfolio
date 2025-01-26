import Image from "next/image";
import styles from "./magazine.module.css";


export default function EMagazineProject() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.projectTitle}>
          <h1 className={styles.project__primaryTitle} >Print & E-Magazine</h1>
          <h2 className={styles.project__subtitle}>Sustainable Building Design</h2>
        </div>

        {/* Project Details */}
        <div className={styles.projectDetails}>
          {/* Left Column: Large Image */}
          <div className={styles.leftColumn}>
            <Image
              src="/images/magazine_cover.png"
              alt="Magzine Cover"
              width={800}
              height={400}
              className={styles.largeImage}
            />
          </div>

          {/* Right Column: Project Details */}
          <div className={styles.rightColumn}>
            <h2 className={styles.sectionTitle}>Summary</h2>
            <p className={styles.projectSummary}>
            This project focuses on designing a magazine about sustainable green architecture, featuring engaging content and visuals. Deliverables include a printed magazine and an interactive digital version for online publication.
            </p>

            <h2 className={styles.sectionTitle}>Skills</h2>
            <ul className={styles.skillsList}>
              <li>Image Optimization</li>
              <li>Responsive Design</li>
              <Image src="/images/arrow.svg" alt="Arrow Icon" />
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
