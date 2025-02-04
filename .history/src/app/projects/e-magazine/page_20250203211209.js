import Image from "next/image";
import styles from "./magazine.module.css";
import Link from "next/link";
import { PiEyesFill } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa6";
import { DiProlog } from "react-icons/di";

export default function EMagazineProject() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.projectTitle}>
          <h1 className={styles.project__primaryTitle} >Print & E-Magazine <FaBookOpen className={styles.bookOpen}/></h1>
          {/* <h2 className={styles.project__subtitle}>Building for Future</h2> */}
          <br></br>
        </div>

        {/* Project Details */}
        <section className={styles.sectionContainer}>
          <div className={styles.projectDetails}>
            {/* Left Column: Large Image */}
            <div className={styles.leftColumn}>
              <Image
                src="/images/projects/magazine/magazine_cover.png"
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
                <span className={styles.projectName}>Building for Future</span> is a magazine showcasing sustainable architecture through innovative designs and eco-friendly practices.
                The project includes both a printed magazine and an interactive digital version for online publication.
                </p>
              </div>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Design Tools</h2>
                <ul className={styles.skillsList}>
                  <li>
                    <Image src="/icons/InDesign.svg" alt="Adobe InDesign Icon" width={40} height={40} />
                  </li>
                  <li>
                    <Image src="/icons/Photoshop.svg" alt="Adobe Photoshop Icon" width={40} height={40} />
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
                <h1 className={styles.sectionTitle}>Design Concept <DiProlog className={styles.designIcon}/></h1>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                    The magazine’s design embraces harmony with nature through a palette of earthy greens and warm oranges, symbolizing growth, vitality, and balance. A circular motif on the cover reinforces the idea of sustainability and the circular economy, while ample white space and an organized layout ensure clarity and readability. Interactive digital features further enhance engagement, making the content accessible and appealing.
                  </p>
                </div>
                <div>
                  <p className={styles.projectSummary}>
                    The typography pairs Fugaz One for headings with Skia for body text, blending boldness and simplicity. Fugaz One’s modern and dynamic style draws attention to key topics, while Skia’s clean, minimal form ensures readability, reflecting the functionality and clarity central to sustainable design. Together, these elements create a cohesive, engaging experience that effectively conveys the magazine’s mission to inspire sustainable practices.
                  </p>
                </div>
              </div>
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
                <Image
                  src="/images/projects/magazine/magazine_mockup.png"
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
                {/* <Image 
                    src={"/images/Magazine Color.png"} 
                    alt="Color Palette" 
                    width={300} 
                    height={100} 
                    className={styles.colorImage} 
                /> */}
                <Image
                  src="/images/projects/magazine/magazine_front.png"
                  alt="Magazine Content - front"
                  width={800}
                  height={400}
                  className={styles.projectImage_Special}
                />
            </div>
            <div>
              <Image
                src="/images/projects/magazine/magazine_content.png"
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
