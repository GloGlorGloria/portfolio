import Image from "next/image";
import styles from "./magazine.module.css";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { PiEyesFill } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa6";

export default function EMagazineProject() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.projectTitle}>
          <h1 className={styles.project__primaryTitle} >Print & E-Magazine <FaBookOpen className={styles.bookOpen}/></h1>
          <h2 className={styles.project__subtitle}>Building for Future</h2>
        </div>

        {/* Project Details */}
        <section className={styles.sectionContainer}>
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
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Summary</h2>
                <p className={styles.projectSummary}>
                This project is a magazine design about sustainable green architecture, featuring engaging content and visuals. The deliverables include a printed magazine and an interactive digital version for online publication.
                </p>
              </div>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Software Applied</h2>
                <ul className={styles.skillsList}>
                  <li>
                    <Image src="/icons/InDesign.svg" alt="InDesign Icon" width={40} height={40} />
                  </li>
                  <li>
                    <Image src="/icons/Photoshop.svg" alt="InDesign Icon" width={40} height={40} />
                  </li>
                </ul>
              </div>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Skills</h2>
                <ul className={styles.skillsList}>
                  <li className={styles.skillsItem}>Content Design</li>
                  <li className={styles.skillsItem}>Interactive Design</li>
                </ul>
              </div>
              <div className={styles.viewOnline}>
                <Link
                  href="https://indd.adobe.com/view/e11d6a99-477f-43c9-8974-0a15f2533cff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button__right}
                >
                <span 
                  className="bg-[#fff0df] hover:bg-orange-100 rounded-full px-5 py-2" 
                > View online <PiEyesFill className={styles.goArrow}/> </span>
                {/* Try it out! <GoArrowUpRight className={`${styles.goArrow}`}/> */}
                </Link>
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
                <h1 className={styles.sectionTitle}>Design Concept</h1>
                <p className={styles.projectSummary}>
                  <span className={styles.projectName}>Building for Future</span> is a magazine showcasing sustainable architecture through innovative designs and eco-friendly practices. With a clean layout, earthy tones, and minimalist typography, it reflects harmony with nature, while the circular motif on the cover symbolizes sustainability and the principles of the circular economy.
                </p>
                <br></br>
                <p className={styles.projectSummary}>
                The magazine balances clear sections and ample white space for readability with interactive digital features to enhance engagement. It aims to inspire and educate readers on the role of sustainable design in creating a greener future.
                </p>
              </div>
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
                <Image
                  src="/images/magazine_mockup.png"
                  alt="Magzine Cover"
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
                  src="/images/magazine_front.png"
                  alt="Magazine Content - front"
                  width={200}
                  height={400}
                  className={styles.projectImage}
                />
            </div>
            <div>
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
