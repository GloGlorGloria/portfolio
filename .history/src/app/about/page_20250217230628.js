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
                <h3 className={styles.projectSummary}>
                I’m a digital design professional transitioning from government communications to tech innovation with a passion for creating meaningful, user-centered solutions. 
                </h3>
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
                  <li className={styles.skillsItem}>Graphic Design</li>
                </ul>
              </div>
            </div>
            <div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
