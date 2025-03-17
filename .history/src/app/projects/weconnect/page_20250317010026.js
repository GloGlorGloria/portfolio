"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./weconnect.module.css";
import Link from "next/link";
import ImageModal from "@/app/components/ImageModal";
import ImageCarouselModal from "@/app/components/ImageCarouselModal";
import { FaCirclePlay, FaWordpress, FaAnglesDown, FaRoute, FaPeopleRoof} from "react-icons/fa6";
import { PiFigmaLogoDuotone, PiArrowBendRightDownFill} from "react-icons/pi";
import {  RiSurveyFill, RiPresentationFill } from "react-icons/ri";
import { BiSolidUserDetail } from "react-icons/bi";
import { BsTranslate, BsStars } from "react-icons/bs";
import { FaSafari, FaVideo, FaHandPointRight } from "react-icons/fa";
import { LuWorkflow } from "react-icons/lu";
import { IoIosColorPalette } from "react-icons/io";
import { GiVideoConference } from "react-icons/gi";
import { IoHappy } from "react-icons/io5";
import { MdInventory } from "react-icons/md";


export default function Relay() {

  const [selectedImage, setSelectedImage] = useState(null);

  const assetInventory = [
    "/images/projects/weconnect/weconnect-asset1.png",
    "/images/projects/weconnect/weconnect-asset2.png",
    "/images/projects/weconnect/weconnect-asset3.png",
  ];

  const safetyFeatures = [ 
    "/images/projects/relay/relay-empower.png",
    "/images/projects/relay/GPS-app.png",
    "/images/projects/relay/AI-notifications.png",
    "/images/projects/relay/AI-notes.png",
    "/images/projects/relay/schedule.png",
    "/images/projects/relay/GPS.png",
  ];

  const trustedCommunity  = [ 
    "/images/projects/relay/relay-connect.png",
    "/images/projects/relay/school-community.png",
    "/images/projects/relay/private-group.png",
    "/images/projects/relay/chatbox.png",
  ];

  const promotionItems  = [ 
    "/images/projects/relay/promotion-items.png",
    "/images/projects/relay/bcard-2.png",
    "/images/projects/relay/brochure-p2.png",
    "/images/projects/relay/instagram.png",
    "/images/projects/relay/instagram-posts.png",
    "/images/projects/relay/dev-blog.png",
  ];

  const team  = [ 
    "/images/projects/relay/meet-team.png",
    "/images/projects/relay/team-photo.png",
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
            <h2 className={styles.sectionTitle}>1. Video Conferencing <GiVideoConference className={styles.designIcon__small}/> </h2>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                    WeConnect's core feature is video conferencing, designed for seamless and effortless meeting creation to connect with others. <span className="font-bold text-primary">Large action buttons</span> on the home page make it easy to start a meeting with a simple checkbox setup and invite participants via a shareable link. Scheduled meetings are displayed on the home screen for better planning. The interface also enables smooth screen-swiping to switch between different profile display modes. 
                  </p>
                  <br></br>
                  <p className={styles.projectSummary}> 
                    The platform also includes <span className="font-bold text-primary">in-app messaging</span> for real-time communication, enabling seamless collaboration before, during, and after meetings while keeping discussions centralized.
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
            <h2 className={styles.sectionTitle}>2. Safety at the heart of Relay <FaSafari className={styles.designIcon__small}/></h2>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                  Relay prioritizes safety just as every parent does for their child, with features designed to provide confidence in every ride.
                  </p>
                  <br></br>
                  <ul>
                    <li className={styles.numberList}><span className="font-bold text-secondary">Real-Time GPS Tracking </span>— Parents can track their child’s ride from start to finish, ensuring peace of mind.</li>
                    <li className={styles.numberList}><span className="font-bold text-secondary">AI-Powered Ride Notifications </span>— Timely updates on ride progress and arrival times keep parents informed, making them feel as if they’re riding along.</li>
                    <li className={styles.numberList}><span className="font-bold text-secondary">Unique Ride PIN </span>— A secure, trip-specific PIN ensures kids enter the correct car, adding an extra layer of protection.</li>
                  </ul>
                  <p className={styles.projectSummary}>By leveraging technology, Relay not only addresses common ridesharing concerns but also empowers parents to manage their children’s transportation with ease and confidence.
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
            <h2 className={styles.sectionTitle}>3. Connect with trusted community <FaPeopleRoof className={styles.designIcon__small}/></h2>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                  No parent would hand their child off to a stranger—that’s why Relay builds a trusted community. Instead of random drivers, parents connect with others from the <span className="font-bold text-secondary">same school or activity group</span> to share the driving load. Every parent we surveyed preferred ridesharing with familiar faces!
                  </p>
                  <br></br>
                  <p className={styles.projectSummary}>To ensure security, identity verification is required to join school groups, confirming all members have children at the same school. Parents can also <span className="font-bold text-secondary">create private groups</span> with their trusted network, using in-app messaging and coordination tools for seamless rideshare planning. 
                  </p>
                  <br></br>
                  <p className={styles.projectSummary}>Beyond convenience, ridesharing strengthens connections, helping both parents and kids <span className="font-bold text-secondary">build closer relationships</span> within their community.</p>
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
                    href="https://www.youtube.com/watch?v=NxCmZUCoi6U&t=10s&ab_channel=GloGlorGloria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button__right} ${styles.large_button}`} 
                  >
                  <span 
                    className="bg-[#fff0df] hover:text-orange-500 rounded-full px-3.5 py-1.5" 
                  > App Demo  <FaCirclePlay className={styles.goArrow}/> </span>
                  {/* Try it out! <GoArrowUpRight className={`${styles.goArrow}`}/> */}
                  </Link>
              
                  <Link
                    href="https://www.figma.com/design/vg0dYyo98bFlOun13uUW7q/Relay-%E2%80%94-Ridesharing-app-for-parents?node-id=0-1&t=RZp3o2aDpcLh3tMA-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button__right} ${styles.large_button}`} 
                  >
                  <span 
                    className="bg-[#fff0df] hover:text-orange-500 rounded-full px-3.5 py-1.5" 
                  > Wireframes <PiFigmaLogoDuotone className={styles.goArrow}/> </span>
                  </Link>
        </div>

        <div>
              <FaAnglesDown  className={styles.downArrow}/>
        </div>

        {/* Marketing & Branding */}
        <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
              <ImageCarouselModal className={styles.largeImage} images={promotionItems} /> 
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
              <div className={styles.sections}>
                <h1 className={styles.sectionTitle}>Marketing & Branding</h1>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                  Bringing Relay to life goes beyond building the app. The team created a variety of promotional materials, including a <span></span>
                  <Link
                    href="https://relay.arspera.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectName} ${styles.link}`}
                  >landing page</Link>, brochures, name cards, stickers, and Instagram (
                     <Link
                    href="https://www.instagram.com/relay.rideshare/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectName} ${styles.link}`}
                  >@relay.rideshare</Link>) to strengthen marketing and branding. By maintaining consistent colors and typography, these materials ensure a cohesive identity.
                  </p>
                  <br></br>
                  <p className={styles.projectSummary}>
                    The Instagram account adopts an infographic style to visually explain the app’s concept and features in a clear, data-driven way, making it easy for parents to understand. This approach not only informs but also aims to resonate with our target audience, reinforcing Relay’s value in their daily lives.</p>
                    <br></br>
                  <p className={styles.projectSummary}>
                  <Link
                    href="https://relay.arspera.com/blog/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectName} ${styles.link}`}
                  >Development blogs</Link> further document the journey, keeping users engaged with updates.
                  </p>
                  <br></br>
                </div>
              </div>
              </div>
            </div>
            <div>
              <FaAnglesDown  className={styles.downArrow}/>
            </div>
        </section>

        {/* Promotional Video */}
        <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
            <h1 className={styles.sectionTitle}>Promotional Video<FaVideo className={styles.designIcon}/></h1>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                  The promotional video takes a storytelling approach, highlighting the real-life challenges parents face with transportation. It showcases how Relay simplifies carpooling and fosters a stronger community, emphasizing the app’s benefits and its positive impact on daily life. By focusing on the emotional connection between parents and children, the video aims to resonate with viewers, encouraging them to try Relay and experience the difference.
                  </p>
                  <br></br>
                  <p className={styles.projectSummary}>Special thanks to the team for their hard work and to the amazing young actors for bringing the story to life!</p>
                </div>        
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
                <div className={styles.sections}>
                  <video
                  src="/videos/relay/promo-video-c.mp4"
                  width={1200}
                  height={800}
                  className={styles.largeVideo}
                  controls
                  style={{ cursor: "pointer" }}
                />
                </div>
              </div>
            </div>
            <div>
              <FaAnglesDown  className={styles.downArrow}/>
            </div>
        </section>

        {/* Project Pitching */}
        <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
              <Image
                  src="/images/projects/relay/team.png"
                  alt="Relay presents at the Annual Student Innovation Design & Technology Showcase"
                  width={1200}
                  height={800}
                  className={styles.largeImage}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedImage("/images/projects/relay/team.png")}
                />
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
              <div className={styles.sections}>
                <h1 className={styles.sectionTitle}>Project Pitching<RiPresentationFill className={styles.designIcon}/></h1>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                  After three months of hard work, Relay was showcased at the <span></span>
                  <Link
                    href="https://www.linkedin.com/posts/joanne-chng_d3-fswd-underrepresented-activity-7272008089032101888-M0ZR?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACAo8pABy7XeZAU3e9L93PoBx8d7dSyWUOg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectName} ${styles.link}`}
                  >Annual Student Innovation Design & Technology Showcase</Link>. The idea was presented to distinguished judges—including BC Minister of Post-Secondary Education and Future Skills Anne Kang, City of Burnaby Mayor Mike Hurley, angel investors, industry leaders, and other notable guests. </p>
                  <br></br>
                  <p className={styles.projectSummary}>Relay was honored with the <span></span>
                  <Link
                    href="https://www.linkedin.com/posts/whchan-gloria_thank-you-for-supporting-relay-i-activity-7272040016611057665-kO7k?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACAo8pABy7XeZAU3e9L93PoBx8d7dSyWUOg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectName} ${styles.link}`}
                  >Gold Award</Link> and received valuable feedback from everyone who expressed interest. Special thanks are extended to the faculty, instructors, families interviewed, and the kids who assisted with filming and organized special prizes.</p>
                </div>
              </div>
              </div>
            </div>
            <div>
              <FaAnglesDown  className={styles.downArrow}/>
            </div>
        </section>

              {/* Conclusion*/}
              <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
            <div className={styles.sections}>
                <h1 className={styles.sectionTitle}>Unforgettable Journey<IoHappy className={styles.designIcon}/></h1>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                    Originally, the team envisioned a broad ridesharing solution focused on eco-friendliness and resource sharing. However, after in-depth research and considering a tight timeline, the focus shifted to the specific challenges faced by working parents. It also became clear that parents were <span className="font-bold text-secondary">hesitant to use ridesharing</span> for their children without robust safety measures, so the concept was refined to emphasize safety and trust. </p>
                  <br></br>
                  <p className={styles.projectSummary}>
                    Building Relay presented significant challenges. The app <span className="font-bold text-secondary">required dynamic accounts for both parents and drivers</span>, a <span className="font-bold text-secondary">user-friendly yet advanced interface</span>, and features such as smart route matching, AI ride notifications, and GPS live tracking. Overcoming these obstacles not only took extra time but also confirmed Relay's potential to make a real difference. Special thanks to everyone for their hard work and dedication in bringing Relay to life!</p>
                    <br></br>
                  <p className={styles.projectSummary}>Meet the <span></span>
                  <Link
                    href="https://relay.arspera.com/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectName} ${styles.link}`}
                  >team</Link> behind Relay! </p>
                </div>
              </div>
             
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
                <ImageCarouselModal className={styles.largeImage} images={team} /> 
              </div>
            </div>
        </section>
        <div className={styles.nextProject}>
          <Link href="/projects/e-magazine" passHref>
              <button className={styles.nextButton}>Next Project<FaHandPointRight className={`${styles.nextArrow}`}/></button>
          </Link> 
        </div>
          </div>
    </main>
  );
}
