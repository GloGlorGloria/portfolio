import Image from "next/image";
import styles from "./relay.module.css";
import Link from "next/link";
import { FaCirclePlay, FaWordpress } from "react-icons/fa6";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { DiProlog } from "react-icons/di";

export default function EMagazineProject() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.projectTitle}>
          <h1 className={styles.project__primaryTitle} >Mobile App Developemnt — Case Study<RiParentFill className={styles.bookOpen}/></h1>
          <Image
                src="/images/projects/relay/relay-black-logo.svg"
                alt="Relay logo"
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
                src="/images/projects/relay/relay-thumbnail.png"
                alt="Relay — Connect, Share, Empower"
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
                Relay is <span className={styles.projectName}> Canada’s first ridesharing app for parents</span>,  enabling safe and reliable carpooling for kids within trusted networks. Through in-depth research, the team identified key challenges and developed an <span className={styles.projectName}>AI-powered solution</span> to ease transportation burdens and foster social connections. 
                Recognized for its innovation and market potential, Relay won <span></span>
                <Link
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7272008089032101888/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectName} ${styles.link}`}
                  >1st place</Link> at the Annual Student Innovation Design & Technology Showcase.
                </p>
              </div>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Role</h2>
                <ul className={styles.skillsList}>
                  <li>
                    Project Manager | UX/UI Designer
                  </li>
                </ul>
              </div>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Timeline</h2>
                <ul className={styles.skillsList}>
                  <li>
                    September — December 2024
                  </li>
                </ul>
              </div>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Key Skills</h2>
                <ul className={styles.skillsList}>
                  <li className={styles.skillsItem}>Project Management</li>
                  <li className={styles.skillsItem}>User Research</li>
                  <li className={styles.skillsItem}>UX/UI Design</li>
                  <li className={styles.skillsItem}>Branding</li>
                </ul>
              </div>
              <div className="flex flex-row gap-5">
                <div className={styles.viewOnline}>
                  <Link
                    href="https://www.youtube.com/watch?v=NxCmZUCoi6U&t=10s&ab_channel=GloGlorGloria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button__right}
                  >
                  <span 
                    className="bg-[#fff0df] hover:text-orange-500 rounded-full px-3.5 py-1.5" 
                  > App Demo  <FaCirclePlay className={styles.goArrow}/> </span>
                  {/* Try it out! <GoArrowUpRight className={`${styles.goArrow}`}/> */}
                  </Link>
                </div>
                <div className={styles.viewOnline}>
                  <Link
                    href="https://relay.arspera.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button__right}
                  >
                  <span 
                    className="bg-[#fff0df] hover:text-orange-500 rounded-full px-3.5 py-1.5" 
                  > Learn More  <FaWordpress className={styles.goArrow}/> </span>
                  </Link>
                </div>
                <div className={styles.viewOnline}>
                  <Link
                    href="https://www.figma.com/design/vg0dYyo98bFlOun13uUW7q/Relay-%E2%80%94-Ridesharing-app-for-parents?node-id=0-1&t=RZp3o2aDpcLh3tMA-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button__right}
                  >
                  <span 
                    className="bg-[#fff0df] hover:text-orange-500 rounded-full px-3.5 py-1.5" 
                  > Wireframes <PiFigmaLogoDuotone className={styles.goArrow}/> </span>
                  </Link>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </section>
      
       {/* Overview */}
        <section className={styles.sectionContainer}>
          <div>
            <h2 className={styles.ovewviewTitle}>Overview</h2>
            <div className={styles.overviewDetails}>
              <div>
                <h3 className="mb-2">Pain Points</h3>
                <p className="text-justify">With 75% of Canadian families with children aged 6–12 having two working parents, the same percentage struggle to balance work and their kids’ transportation needs due to limited reliable options.</p>
              </div>
              <div>
                <h3 className="mb-2">Solution</h3>
                <p className="text-justify">Relay provides an AI-powered ridesharing platform that connects parents within their <span className="font-bold">trusted community</span>, easing transportation burdens through smart route matching, live GPS tracking, and real-time ride updates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaway */}
        <section className={styles.sectionContainer}>
          <div>
            <h2 className={styles.takeAway}>Key Takeaway</h2>
            <p className={styles.quotes}> <span className={styles.quotation}>"</span>Great design starts with listening—deeper insights drive impactful solutions that truly help.<span className={styles.quotation}>"</span></p>
          </div>
        </section>

        {/* User Research */}
        <section className={styles.sectionContainer}>
            <div className={styles.projectDetails}>
            <div className={styles.leftColumn}>
            <Image
                  src="/images/projects/relay/relay-user-research.png"
                  alt="Relay User Research Data"
                  width={800}
                  height={400}
                  className={styles.largeImage}
                />
              
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
              <div className={styles.sections}>
                <h1 className={styles.sectionTitle}>User Research <DiProlog className={styles.designIcon}/></h1>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                  User research uncovered key challenges parents face in managing their children’s transportation. Three key insights emerged:
                  </p>
                </div>
                <div>
                  <ul>
                    <li className={styles.numberList}><span className="font-bold">Scheduling conflicts</span> — 75% of parents struggle to arrange transportation due to conflicting schedules, and 67% report that transportation issues have disrupted their children’s participation in activities.</li>
                    <li className={styles.numberList}><span className="font-bold">Safety concerns</span> —100% of parents agree that GPS tracking is essential, and 83% prefer private groups to organize carpools within trusted networks.</li>
                    <li className={styles.numberList}><span className="font-bold">Scheduling conflicts</span> — 75% of parents struggle to arrange transportation due to conflicting schedules, and 67% report that transportation issues have disrupted their children’s participation in activities.</li>
                  </ul>
                </div>
                <div>
                  <p className={styles.projectSummary}>
                    The typography pairs Fugaz One for headings with Skia for body text, blending boldness and simplicity. Fugaz One’s modern and dynamic style draws attention to key topics, while Skia’s clean, minimal form ensures readability, reflecting the functionality and clarity central to sustainable design. Together, these elements create a cohesive, engaging experience that effectively conveys the magazine’s mission to inspire sustainable practices.
                  </p>
                </div>
              </div>
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
