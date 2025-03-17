"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./weconnect.module.css";
import Link from "next/link";
import ImageModal from "@/app/components/ImageModal";
import ImageCarouselModal from "@/app/components/ImageCarouselModal";
import { FaWordpress, FaAnglesDown,} from "react-icons/fa6";
import { PiFigmaLogoDuotone, PiArrowBendRightDownFill, PiVideoConferenceFill } from "react-icons/pi";
import {  RiSurveyFill } from "react-icons/ri";
import { BiSolidUserDetail } from "react-icons/bi";
import { BsTranslate, BsStars } from "react-icons/bs";
import { FaToolbox, FaHandPointRight } from "react-icons/fa";
import { LuWorkflow } from "react-icons/lu";
import { IoIosColorPalette } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { MdInventory } from "react-icons/md";


export default function Relay() {

  const [selectedImage, setSelectedImage] = useState(null);

  const assetInventory = [
    "/images/projects/weconnect/weconnect-asset1.png",
    "/images/projects/weconnect/weconnect-asset2.png",
    "/images/projects/weconnect/weconnect-asset3.png",
  ];


  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.projectTitle}>
          <h1 className={styles.project__primaryTitle} >Web-App Design — Instant Translation Video Conferencing <BsTranslate className={styles.bookOpen}/></h1>
          <Image
                src="/images/projects/weconnect/weconnect-logo.png"
                alt="WeConnect logo"
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
            <h3 className="font-semi-bold text-lg">App Demo</h3>
            <video
                src="/videos/weconnect/weconnect-Demo.mp4"
                width={1200}
                height={800}
                className={styles.largeVideo}
                controls
                autoPlay
                muted
                style={{ cursor: "pointer" }}
            />
            </div>

            {/* Right Column: Project Details */}
            <div className={styles.rightColumn}>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Summary</h2>
                <p className={`${styles.projectSummary} ${styles.textJustify}`}>
                  WeConnect is an <span className="font-bold text-primary">instant translation video conferencing</span> web app tackling communication barriers in Canada’s multicultural environment. Designed by a team of 4 UX/UI designers, it evolved from user research into an intuitive interface, refined through usability testing. A comprehensive <span className="font-bold text-primary">style guide and asset inventory</span> ensured a smooth developer handoff for seamless implementation.
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
                    January — April 2024
                  </li>
                </ul>
              </div>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Key Skills</h2>
                <ul className={styles.skillsList}>
                  <li className={styles.skillsItem}>User Research</li>
                  <li className={styles.skillsItem}>UX/UI Design</li>
                  <li className={styles.skillsItem}>Usability Testing</li>
                  <li className={styles.skillsItem}>GUI Assets</li>
                </ul>
              </div>
              <div className="flex flex-row gap-5">
                
                <div className={styles.viewOnline}>
                  <Link
                    href="https://www.figma.com/proto/kN07zJ5cofQ4vPYbEkQmHU/WeConnect-%E2%80%94-Instant-translation-app-for-team-meetings?page-id=435%3A4674&node-id=907-38911&viewport=584%2C529%2C0.07&t=6vn6zHrRSXoljam9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=907%3A38911&show-proto-sidebar=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button__right}
                  >
                  <span 
                    className="bg-[#fff0df] hover:text-orange-500 rounded-full px-3.5 py-1.5" 
                  > Prototype <PiFigmaLogoDuotone className={styles.goArrow}/> </span>
                  </Link>
                </div>
                <div className={styles.viewOnline}>
                  <Link
                    href="https://weconnect.zenowong.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button__right}
                  >
                  <span 
                    className="bg-[#fff0df] hover:text-orange-500 rounded-full px-3.5 py-1.5" 
                  > Promo Site <FaWordpress className={styles.goArrow}/> </span>
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
                <h3 className="mb-2">Pain Point</h3>
                <p className={styles.projectSummary}>Canada is a multilingual country where people frequently collaborate across different languages. However, 44% of survey respondents <span className="font-bold">struggle with language barriers</span> during video calls. Popular platforms lock transcription behind paywalls and have a steep learning curve, limiting accessibility.</p>
              </div>
              <div>
                <h3 className="mb-2">Solution</h3>
                <p className={styles.projectSummary}>WeConnect offers a modern and user-friendly design with instant translation and collaborative tools, boosting productivity and reducing language misunderstandings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaway */}
        <section className={styles.sectionContainer}>
          <div>
            <h2 className={styles.takeAway}>Key Takeaway</h2>
            <p className={styles.quotes}> <span className={styles.quotation}>"</span>Creating a well-organized, detailed asset inventory and maintaining clear communication are key to ensuring a seamless handover to developers.<span className={styles.quotation}>"</span></p>
          </div>
        </section>

        {/* User Research */}
        <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
            <Image
                  src="/images/projects/weconnect/weconnect-research.png"
                  alt="WeConnect User Research"
                  width={1200}
                  height={800}
                  className={styles.largeImage}
                  onClick={() => setSelectedImage("/images/projects/weconnect/weconnect-research.png")}
                  style={{ cursor: "pointer" }}
            />
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
              <div className={styles.sections}>
                <h1 className={styles.sectionTitle}>User Research <RiSurveyFill className={styles.designIcon}/></h1>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                  A survey of <span className="font-bold text-primary">31 respondents</span> was conducted to analyze video conferencing usage, transcription needs, and preferences for an all-in-one platform. 80% of respondents use Zoom, making it a key reference for secondary research. To gain deeper insights, <span className="font-bold text-primary">online reviews and user experience analysis</span> were conducted to identify both strengths and weaknesses. These findings serve as valuable references in designing the collaborative app.
                  </p>
                </div>
                <div>
                  <ul>
                    <li className={styles.numberList}><span className="font-bold text-primary">Speech-to-Text Over Live Translation</span> — Preferred to reduce chaos and improve meeting follow-ups.</li>
                    <li className={styles.numberList}><span className="font-bold text-primary">Integrated Collaboration Tools</span> — High demand for whiteboards, documents sharing, and polling to enhance collaboration.</li>
                    <li className={styles.numberList}><span className="font-bold text-primary">Privacy Concerns</span> — Respondents emphasize data security and the need for protected information storage.</li>
                  </ul>
                </div>
                <div>
                  <p className={styles.projectSummary}>
                  These insights guided a focus on intuitive design and seamless collaboration. Learn more from the <span></span>
                    <Link
                    href="https://drive.google.com/file/d/1dC-sS_-s0Et_ThHrGmGrjZJ3hDaWRQVH/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectName} ${styles.link}`}
                  >User Findings Report</Link>.
                  </p>
                </div>
              </div>
              </div>
            </div>
            <div>
              <FaAnglesDown className={styles.downArrow}/>
            </div>
           
            {selectedImage && <ImageModal src={selectedImage} alt="Relay User Research Data" onClose={() => setSelectedImage(null)} />}

        </section>

        {/* User Persona */}
        <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
              <h1 className={styles.sectionTitle}>User Personas <BiSolidUserDetail className={styles.designIcon}/></h1>
                <div className={styles.persona}>
                  <Image
                    src="/images/projects/weconnect/weconnect-persona1.png"
                    alt="WeConnect persona"
                    width={800}
                    height={500}
                    className={styles.personaImage}
                  />
                  <Image
                    src="/images/projects/weconnect/weconnect-persona2.png"
                    alt="WeConnect persona"
                    width={1200}
                    height={800}
                    className={styles.personaImage}
                  />
                </div>
            </div>
          </div>
            <div>
              <FaAnglesDown className={styles.downArrow}/>
            </div>
        </section>


         {/* User Story*/}
        <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
              <div className={styles.sections}>
                <Image
                    src="/images/projects/weconnect/weconnect-userstory.png"
                    alt="WeConnect User Story Map"
                    width={1200}
                    height={800}
                    className={styles.largeImage}
                    onClick={() => setSelectedImage("/images/projects/weconnect/weconnect-userstory.png")}
                    style={{ cursor: "pointer" }}
                  />
              </div>
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
              <h1 className={styles.sectionTitle}>User Story Mapping <LuWorkflow className={styles.designIcon}/></h1>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                  The user story map for WeConnect was essential in <span className="font-bold text-primary">defining user needs, prioritizing features,</span> and shaping the <span className="font-bold text-primary">Minimum Viable Product (MVP)</span>. By mapping key activities for business professionals, students, and individuals, the team identified critical workflows such as translation, video conferencing, collaboration tools, and account management.
                  </p>
                  <br></br>
                  <p className={styles.projectSummary}>
                    It clarified user journeys and provided a shared framework for designers and developers, ensuring seamless navigation and efficient feature development.
                  </p>
                </div>   
              </div>
            </div>
            <div>
              <FaAnglesDown className={styles.downArrow}/>
            </div>
        </section>

          {/* StyleGuide */}
          <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
              <div className={styles.sections}>
              <h1 className={styles.sectionTitle}>Style Guide<IoIosColorPalette className={styles.designIcon}/></h1>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                    WeConnect’s design is crafted to feel <span className="font-bold text-primary">modern, professional, and easy to use</span>. The gradient color palette, blending deep indigo and royal blue, creates a forward-thinking aesthetic that sets it apart from traditional video conferencing apps. This choice not only enhances visual appeal but also reinforces a sense of trust and innovation. </p>
                  <br></br>
                  <p className={styles.projectSummary}>
                    The <span className="font-bold text-primary">rounded buttons and smooth UI elements</span> make interactions feel intuitive, ensuring a seamless experience. At the heart of the brand, the WeConnect logo, inspired by a paperclip, <span className="font-bold text-primary"> symbolizes connection and collaboration</span>, reflecting the app’s core purpose of bringing people together effortlessly. Every design detail works together to make communication feel stylish, simple, and effective.
                  </p>
                </div>
              </div>
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
              <Image
                  src="/images/projects/weconnect/weconnect-styleguide.png"
                  alt="Relay Workflow and User Story Map"
                  width={1200}
                  height={800}
                  className={styles.largeImage}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedImage("/images/projects/weconnect/weconnect-styleguide.png")}
                />
              </div>
            </div>
            <div>
              <FaAnglesDown  className={styles.downArrow}/>
            </div>
        </section>

          {/* Asset Inventory */}
          <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
              <ImageCarouselModal className={styles.largeImage} images={assetInventory} /> 
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
              <div className={styles.sections}>
                <h1 className={styles.sectionTitle}>Detailed Asset Inventory<MdInventory className={styles.designIcon}/></h1>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                    A comprehensive asset inventory was created and delivered to developers after the design process, ensuring all design elements were <span className="font-bold text-primary">systematically organized</span>. This inventory included essential assets such as icons, typography, color codes, and layout specifications. Accompanied by detailed style guides and precise specifications, it ensured consistency throughout the development process, minimizing errors and reducing the need for clarifications or rework. 
                  </p>
                  <br></br>
                  <p className={styles.projectSummary}>
                    Maintaining a transparent workflow during the design process facilitated a seamless transition from design to development, enabling the delivery of a polished and cohesive final product.
                  </p>
                </div>
              </div>
              </div>
            </div>
            <div className="mb-16">
              <div className="flex flex-row justify-center">
                 <h3>Explore Details</h3>
                <PiArrowBendRightDownFill className={styles.exploreArrow}/>
              </div>
              <iframe 
                className={styles.figmaEmbed} 
                src="https://embed.figma.com/design/TiCeTfzkb5qknBkhFhYRGB/WeConnect-%E2%80%94-Instant-Translation-Video-Conferencing?node-id=50760-47724&embed-host=share" 
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <FaAnglesDown  className={styles.downArrow}/>
            </div>
        </section>

         {/* Key Features 1 */}
         <section className={styles.sectionContainer}>
          <h1 className="text-center">App Highlights <BsStars className={styles.designIcon}/></h1>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>1. Video Conferencing <PiVideoConferenceFill className={styles.designIcon__small}/> </h2>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                    WeConnect's core feature is video conferencing, designed for seamless and effortless meeting creation to connect with others. <span className="font-bold text-secondary">Large action buttons</span> on the home page make it easy to start a meeting with a simple checkbox setup and invite participants via a shareable link. Scheduled meetings are displayed on the home screen for better planning. The interface also enables smooth screen-swiping to switch between different profile display modes. 
                  </p>
                  <br></br>
                  <p className={styles.projectSummary}> 
                    The platform also includes <span className="font-bold text-secondary">in-app messaging</span> for real-time communication, enabling seamless collaboration before, during, and after meetings while keeping discussions centralized.
                  </p>
                </div>        
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
                <div className={styles.sections}>
                <Image
                  src="/images/projects/weconnect/weconnect-connection.png"
                  alt="WeConnect video conferencing and in-app messaging feature"
                  width={1200}
                  height={800}
                  className={styles.largeImage}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedImage("/images/projects/weconnect/weconnect-connection.png")}
                />
                </div>
              </div>
            </div>
        </section>

         {/* Key Features 2 */}
         <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>2. Instant Translation <BsTranslate className={styles.designIcon__small}/></h2>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                   To break language barriers, WeConnect integrates instant translation with <span className="font-bold text-secondary">speech-to-text transcription</span> in video conferencing. Instead of speech-to-speech translation, speech-to-text is used based on user feedback, ensuring clarity and reducing confusion. This feature provides real-time captions, helping participants follow discussions smoothly. 
                  </p>
                  <br></br>
                  <p className={styles.projectSummary}>
                    After the meeting, <span className="font-bold text-secondary">detailed translated transcripts</span> remain accessible, ensuring no important details are missed. By minimizing communication gaps, instant translation makes meetings more inclusive and effective.
                  </p>
                </div>        
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
                <div className={styles.sections}>
                <Image
                  src="/images/projects/weconnect/weconnect-translation.png"
                  alt="WeConnect instant translation feature"
                  width={1200}
                  height={800}
                  className={styles.largeImage}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedImage("/images/projects/weconnect/weconnect-translation.png")}
                /> 
                </div>
              </div>
            </div>
        </section>

         {/* Key Features 3 */}
         <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>3. Collaborative Tools <FaToolbox className={styles.designIcon__small}/></h2>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                    WeConnect brings all essential collaboration tools into one seamless video conferencing experience, enhancing productivity and engagement.
                  </p>
                  <br></br>
                  <ul>
                    <li className={styles.numberList}><span className="font-bold text-secondary">Virtual Whiteboard</span> — Brainstorm visually, sketch ideas, and collaborate in real time for interactive discussions.</li>
                    <li className={styles.numberList}><span className="font-bold text-secondary">Live Polls & Surveys</span> — Gather instant feedback, make quick decisions, and keep meetings dynamic.</li>
                    <li className={styles.numberList}><span className="font-bold text-secondary">Screen Sharing</span> — Present ideas, walk through documents, or provide live demonstrations effortlessly.</li>
                    <li className={styles.numberList}><span className="font-bold text-secondary">File Sharing</span> — Instantly exchange important documents, images, and resources without switching between apps.</li>
                  </ul>
                  <p className={styles.projectSummary}>
                    By integrating these tools within a single platform, WeConnect eliminates the hassle of juggling multiple apps, streamlining teamwork and ensuring meetings stay interactive and efficient. 
                  </p>
                </div>        
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
                <div className={styles.sections}>
                <Image
                  src="/images/projects/weconnect/weconnect-collaboration.png"
                  alt="WeConnect collaborative features"
                  width={1200}
                  height={800}
                  className={styles.largeImage}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedImage("/images/projects/weconnect/weconnect-collaboration.png")}
                /> 
                </div>
              </div>
            </div>
        </section>

        <div className={`${styles.viewOnline} ${styles.viewOnline__container}`} >
                  <Link
                    href="https://www.figma.com/proto/kN07zJ5cofQ4vPYbEkQmHU/WeConnect-%E2%80%94-Instant-translation-app-for-team-meetings?page-id=435%3A4674&node-id=907-38911&viewport=584%2C529%2C0.07&t=6vn6zHrRSXoljam9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=907%3A38911&show-proto-sidebar=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button__right} ${styles.large_button}`} 
                  >
                  <span 
                    className="bg-[#fff0df] hover:text-orange-500 rounded-full px-3.5 py-1.5" 
                  > Try it out <GoArrowUpRight className={`${styles.goArrow}`}/> </span>
                  </Link>
              
                  <Link
                    href="https://www.figma.com/design/TiCeTfzkb5qknBkhFhYRGB/WeConnect-%E2%80%94-Instant-Translation-Video-Conferencing?node-id=435-4674&t=TtgiY5qGNcQbcii8-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button__right} ${styles.large_button}`} 
                  >
                  <span 
                    className="bg-[#fff0df] hover:text-orange-500 rounded-full px-3.5 py-1.5" 
                  > Wireframes <PiFigmaLogoDuotone className={styles.goArrow}/> </span>
                  </Link>
        </div>
        
        <div className={styles.nextProject}>
          <Link href="/projects/e-magazine" passHref>
              <button className={styles.nextButton}>Next Project<FaHandPointRight className={`${styles.nextArrow}`}/></button>
          </Link> 
        </div>
          </div>
    </main>
  );
}
