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
                <h4 className={styles.projectSummary}>
                I’m a digital design professional transitioning from government communications to tech innovation with a passion for creating meaningful, user-centered solutions. 
                </h4>
                <br></br>
                <div>
                  <p className="text-justify">After relocating from Hong Kong to Vancouver in 2023, I advanced my skills through BCIT’s Digital Design and Development program.</p>
                  <br></br>
                  <p className="text-justify">I specialize in UX/UI design, seamlessly combining tools like Figma and Adobe Creative Suite with front-end development skills in HTML, CSS, and JavaScript. I thrive on solving real-world challenges by creating innovative, human-centered designs and contributing to teams with dedication and adaptability.</p>
                  <br></br>
                  <p className="text-justify">My 5+ years of experience in government and research have sharpened my coordination, problem-solving, and collaboration skills, enabling me to effectively communicate with diverse stakeholders and understand their needs. As a trilingual professional fluent in Cantonese, Mandarin, and English, I offer a unique cross-cultural perspective to digital design</p>
                </div>
              </div>
              </div>
              <div>
            </div>
          </div>
        </section>


        <h2 className={styles.ovewviewTitle}></h2>

        <section className={styles.sectionContainer}>
          <div className={styles.profileMore}>
            <h1>What's More?</h1>
            <p className="mt-4 text-lg">I enjoy brewing Chinese tea to unwind and refresh my mind, as well as going on road trips to explore the beauty of Canada and nearby places.</p>
          </div>

          <div className={styles.gallery}>
            <Image    
              src="/images/teaset.JPG" 
              alt="Tea" 
              width={380} 
              height={250} />
            <Image    
              src="/images/brewtea.png" 
              alt="Tea" 
              width={380} 
              height={250} />
              <Image    
              src="/images/teaset2.png" 
              alt="Tea" 
              width={380} 
              height={250} />
          </div>
          <div className={styles.gallery}>
            <Image    
              src="/images/banff.jpg" 
              alt="Tea" 
              width={380} 
              height={250} />
            <Image    
              src="/images/seattle.JPG" 
              alt="Tea" 
              width={380} 
              height={250} />
              <Image    
              src="/images/snow.jpg" 
              alt="Tea" 
              width={380} 
              height={250} />
          </div>
        </section>
      </div>
    </main>
  );
}
