"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./relay.module.css";
import Link from "next/link";
import ImageModal from "@/app/components/ImageModal";
import ImageCarousel from "@/app/components/ImageCarousel";
import { FaCirclePlay, FaWordpress, FaAnglesDown, FaRoute, FaPeopleRoof} from "react-icons/fa6";
import { PiFigmaLogoDuotone, PiFileMagnifyingGlassFill } from "react-icons/pi";
import { RiParentFill, RiSurveyFill, RiPresentationFill } from "react-icons/ri";
import { BiSolidUserDetail } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { FaSafari, FaVideo, FaHandPointRight } from "react-icons/fa";
import { LuWorkflow } from "react-icons/lu";
import { IoIosColorPalette } from "react-icons/io";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { IoHappy } from "react-icons/io5";

export default function Relay() {

  const [selectedImage, setSelectedImage] = useState(null);

  const userPersona = [
    "/images/projects/relay/primary-persona.png",
    "/images/projects/relay/secondary-persona.png",
  ];

  const smartRoute = [
    "/images/projects/relay/relay-share.png",
    "/images/projects/relay/post-ride.png",
    "/images/projects/relay/post-request-app.png",
    "/images/projects/relay/post-request.png",
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
          <h1 className={styles.project__primaryTitle} >Award-winning Mobile App Development — Case Study<RiParentFill className={styles.bookOpen}/></h1>
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
            <h3 className="font-semi-bold text-lg">App Demo</h3>
            <video
                src="/videos/relay/Demo.mp4"
                width={1200}
                height={800}
                className={styles.largeVideo}
                controls
                style={{ cursor: "pointer" }}
            />
              {/* <Image
                src="/images/projects/relay/relay-thumbnail.png"
                alt="Relay — Connect, Share, Empower"
                width={1200}
                height={800}
                className={styles.largeImage}
                onClick={() => setSelectedImage("/images/projects/relay/relay-thumbnail.png")}
                style={{ cursor: "pointer" }}
              /> */}
            </div>

            {/* Right Column: Project Details */}
            <div className={styles.rightColumn}>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Summary</h2>
                <p className={styles.projectSummary}>
                Relay is <span className={styles.projectName}> Canada’s first ridesharing app for parents</span>,  enabling safe and reliable carpooling for kids within trusted networks. Built by a team of 8 UX/UI designers and full-stack developers, the team identified key challenges and created an <span className={styles.projectName}> AI-powered solution </span>to ease transportation burdens and foster social connections. 
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
                    href="https://relay.arspera.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button__right}
                  >
                  <span 
                    className="bg-[#fff0df] hover:text-orange-500 rounded-full px-3.5 py-1.5" 
                  > Dev Blog <FaWordpress className={styles.goArrow}/> </span>
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
                <div className={styles.viewOnline}>
                  <Link
                      href="https://youtu.be/VuBZm-PotTE?si=w5s4fQ2aOu3z2EX1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.button__right}
                    >
                    <span 
                      className="bg-[#fff0df] hover:text-orange-500 rounded-full px-3.5 py-1.5" 
                    > Promo Video <FaCirclePlay className={styles.goArrow}/> </span>
                    {/* Try it out! <GoArrowUpRight className={`${styles.goArrow}`}/> */}
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
                <p className={styles.projectSummary}>With 75% of Canadian families with children aged 6–12 having two working parents, the same percentage struggle to balance work and their kids’ transportation needs due to limited reliable options.</p>
              </div>
              <div>
                <h3 className="mb-2">Solution</h3>
                <p className={styles.projectSummary}>Relay is an <span className="font-bold">AI-powered</span> ridesharing platform that connects parents within trusted communities, simplifying transportation with smart route matching, live GPS tracking, and real-time ride updates.</p>
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
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
            <Image
                  src="/images/projects/relay/relay-user-research.png"
                  alt="Relay User Research Data"
                  width={1200}
                  height={800}
                  className={styles.largeImage}
                  onClick={() => setSelectedImage("/images/projects/relay/relay-user-research.png")}
                  style={{ cursor: "pointer" }}
                />
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
              <div className={styles.sections}>
                <h1 className={styles.sectionTitle}>User Research <RiSurveyFill className={styles.designIcon}/></h1>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                  User research uncovered key challenges parents face in managing their children’s transportation. Three key insights emerged:
                  </p>
                </div>
                <div>
                  <ul>
                    <li className={styles.numberList}><span className="font-bold text-secondary">Scheduling conflicts</span> — 75% of parents struggle to arrange transportation due to conflicting schedules, and 67% report that transportation issues have disrupted their children’s participation in activities.</li>
                    <li className={styles.numberList}><span className="font-bold text-secondary">Safety concerns</span> —100% of parents agree that GPS tracking is essential, and 83% prefer private groups to organize carpools within trusted networks.</li>
                    <li className={styles.numberList}><span className="font-bold text-secondary">Rideshare demand</span> — 75% of parents struggle to arrange transportation due to conflicting schedules, and 67% report that transportation issues have disrupted their children’s participation in activities.</li>
                  </ul>
                </div>
                <div>
                  <p className={styles.projectSummary}>
                    These insights shaped a solution prioritizing <span className="font-bold">safety, convenience,</span> and <span className="font-bold">trusted connections</span>. Learn more from the <span></span>
                    <Link
                    href="https://drive.google.com/file/d/1AFnJPVDrIHCMcRFgdjcG65a-SkyHVtI9/view?usp=sharing"
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
              <FaAnglesDown  className={styles.downArrow}/>
            </div>
           
            {selectedImage && <ImageModal src={selectedImage} alt="Relay User Research Data" onClose={() => setSelectedImage(null)} />}

        </section>

        {/* Competitive Analysis */}
        <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
            <h1 className={styles.sectionTitle}>Competitive Analysis <PiFileMagnifyingGlassFill className={styles.designIcon}/></h1>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                    A competitive analysis was conducted to evaluate how Relay compares to other ride-sharing platforms. Since <span className="font-bold text-secondary">no direct competitors were found in Canada</span>, the research focused on U.S.-based platforms and indirect competitors, such as general ride-sharing apps not specifically designed for kids. This helped identify key opportunities for Relay to stand out in the market.
                  </p>
                  <br></br>
                  <p className={styles.projectSummary}>
                    The analysis highlights Relay’s unique position as an all-in-one platform that combines ride scheduling, in-app communication, real-time GPS tracking, and AI-powered ride notifications. Its focus on <span className="font-bold text-secondary">community-driven connections</span> through public and private group channels further sets it apart. By assessing competitor strengths and weaknesses, the research also identified actionable improvements to enhance user experience, design, and features. For more details, check out the full report.
                  </p>
                </div>        
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
                <div className={styles.sections}>
                  <ImageCarousel className={styles.largeImage} images={userPersona} /> 
                </div>
              </div>
            </div>
            <div>
              <FaAnglesDown className={styles.downArrow}/>
            </div>
        </section>


        {/* User Persona */}
        <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
            <h1 className={styles.sectionTitle}>User Personas <BiSolidUserDetail className={styles.designIcon}/></h1>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                  To make sure Relay truly works for parents, user personas were created based on real stories from surveys and interviews. 
                  </p>
                  <br></br>
                  <ul>
                    <li className={styles.numberList}><span className="font-bold text-primary">Meet Joseph</span>, a full-time software engineer and father of a 10-year-old son, struggles to arrange reliable rides due to his demanding schedule. He values a tech-driven ridesharing solution with GPS tracking and reliable network. </li>
                    <li className={styles.numberList}><span className="font-bold text-accent">Meet Sarah</span>, a part-time climate policy advisor, enjoys helping her community by giving kids rides but finds it hard to coordinate with busy parents. She seeks a platform that simplifies scheduling, enhances communication, and builds connection. </li>
                  </ul>
                  <p className={styles.projectSummary}>These personas guided app development by representing real users' needs, behaviors, and challenges, ensuring the design and features effectively meet user expectations.</p>
                </div>        
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
                <div className={styles.sections}>
                  <ImageCarousel className={styles.largeImage} images={userPersona} /> 
                </div>
              </div>
            </div>
            <div>
              <FaAnglesDown className={styles.downArrow}/>
            </div>
        </section>

          {/* User workflow */}
          <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
            <Link
              href="https://www.figma.com/board/eh4ElVpMsUFN3MLid9M4p5/Relay-App-Workflow-%26-User-Story-Map?node-id=0-1&t=w39HozD9MutbMTmQ-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                  src="/images/projects/relay/relay-workflow.png"
                  alt="Relay Workflow and User Story Map"
                  width={1200}
                  height={800}
                  className={styles.largeImage}
                  style={{ cursor: "pointer" }}
                />
            </Link>
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
              <div className={styles.sections}>
                <h1 className={styles.sectionTitle}>User Workflow <LuWorkflow className={styles.designIcon}/></h1>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                  An app workflow and user story map were created to visualize the user journey, streamline navigation, and prioritize features within a tight timeline. The workflow offered a structured framework for intuitive interactions, ensuring both designers and developers had a clear understanding of the app's flow. </p>
                  <br></br>
                  <p className={styles.projectSummary}>The user story map helped break down user needs, identify dependencies, and define the <span className="text-secondary font-bold">Minimum Viable Product (MVP)</span>. These tools played a key role in ensuring a seamless user experience, improving team alignment, and optimizing development efficiency.</p>
                </div>
              </div>
              </div>
            </div>
            <div>
              <FaAnglesDown  className={styles.downArrow}/>
            </div>
        </section>

               {/* Style Guide */}
               <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
            <div className={styles.sections}>
                <h1 className={styles.sectionTitle}>Style Guide<IoIosColorPalette className={styles.designIcon}/></h1>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                  Rounded buttons and typography create a welcoming, modern, and easy-to-read interface. They enhance approachability, ensure easy tapping, and build trust among parents, aligning with the app’s focus on connection. </p>
                  <br></br>
                  <p className={styles.projectSummary}>The branding colors, a mix of <span className="font-bold text-accent">orange</span> and <span className="font-bold text-secondary">red</span>, reinforce warmth and trust, supporting a safe, community-driven environment. The logo integrates key elements of radar, a car side mirror, and eco-friendly symbolism to represent connectivity and sustainability within the Relay brand.</p>
                </div>
              </div>
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
                <Image
                    src="/images/projects/relay/style-guide.png"
                    alt="Relay Style Guide"
                    width={1200}
                    height={800}
                    className={styles.largeImage}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedImage("/images/projects/relay/style-guide.png")}
                  />
              </div>
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
            <h2 className={styles.sectionTitle}>1. Smart Route Matching <FaRoute className={styles.designIcon__small}/> </h2>
                <div className="mb-4">
                  <p className={styles.projectSummary}>
                  Relay's Smart Route Matching streamlines carpooling by <span className="font-bold text-secondary">automatically suggesting ride matches </span>based on similar routes and times. Previously, parents had to manually coordinate schedules with other individuals, but with Relay, the process becomes effortless with just a few taps.
                  </p>
                  <br></br>
                  <p className={styles.projectSummary}> The app also <span className="font-bold text-secondary">estimates ride time changes</span> based on different matches, allowing parents to quickly form carpools with others heading to the same destination based on their preferences. This not only saves time but also makes kids transportation more efficient, easing the load for parents.</p>
                </div>        
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
                <div className={styles.sections}>
                  <ImageCarousel className={styles.largeImage} images={smartRoute} /> 
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
                  <ImageCarousel className={styles.largeImage} images={safetyFeatures} /> 
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
                  <ImageCarousel className={styles.largeImage} images={trustedCommunity} /> 
                </div>
              </div>
            </div>
        </section>

        <div className={styles.viewOnline}>
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
        </div>

        <div>
              <FaAnglesDown  className={styles.downArrow}/>
        </div>

        {/* Marketing & Branding */}
        <section className={styles.sectionContainer}>
          <div className={`${styles.projectDetails} ${styles.casestudy__section}`}>
            <div className={styles.leftColumn}>
              <ImageCarousel className={styles.largeImage} images={promotionItems} /> 
            </div>
            {/* Left Column: Large Image */}
              <div className={styles.rightColumn}>
              <div className={styles.sections}>
                <h1 className={styles.sectionTitle}>Marketing & Branding <GiBoxingGloveSurprise className={styles.designIcon}/></h1>
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
                <ImageCarousel className={styles.largeImage} images={team} /> 
              </div>
            </div>
        </section>
        <div className={styles.nextProject}>
          <Link href="/projects/e-magazine" passHref>
              <button className={styles.nextButton}>See Next<FaHandPointRight className={`${styles.nextArrow}`}/></button>
          </Link> 
        </div>
          </div>
    </main>
  );
}
