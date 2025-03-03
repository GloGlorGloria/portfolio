"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./f1-poster.module.css";
import Link from "next/link";
import { IoCarSport } from "react-icons/io5";
import { DiProlog } from "react-icons/di";
import { FaHandPointRight } from "react-icons/fa";
import ImageModal from "@/app/components/ImageModal";
import ImageCarouselModal from "@/app/components/imageModalCarousel";

export default function F1Poster() {
  const [selectedImage, setSelectedImage] = useState(null);

  const postersMockup = [
    "/images/projects/F1/F1_Bustop.png",
    "/images/projects/F1/Max.png",
    "/images/projects/F1/Norris revised.png",
    "/images/projects/F1/Lewis.png"
  ];

  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.projectTitle}>
          <h1 className={styles.project__primaryTitle}>
            Graphic Design <IoCarSport className={styles.carIcon} />
          </h1>
          <Image
            src="/images/projects/F1/F1.svg"
            alt="F1 logo"
            width={800}
            height={400}
            className={styles.brandIcon}
          />
        </div>

        {/* Project Details */}
        <section className={styles.sectionContainer}>
          <div className={styles.projectDetails}>
            <div className={styles.leftColumn}>
              <Image
                src="/images/projects/F1/F1_indoor.png"
                alt="F1 posters"
                width={800}
                height={400}
                className={styles.largeImage}
                onClick={() => setSelectedImage("/images/projects/F1/F1_indoor.png")}
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className={styles.rightColumn}>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Summary</h2>
                <p className={styles.projectSummary}>
                  This F1 poster series features three prominent drivers and their
                  notable Grand Prix victories in 2024. Each poster focuses on a key
                  moment of triumph, using bold visuals and thoughtful design to
                  reflect the energy of the race and the driver’s individual
                  achievements in the season.
                </p>
              </div>
              <div className={styles.sections}>
                <h2 className={styles.infoTitle}>Design Tools</h2>
                <ul className={styles.skillsList}>
                  <li>
                    <Image
                      src="/icons/Photoshop.svg"
                      alt="Adobe Photoshop Icon"
                      width={40}
                      height={40}
                    />
                  </li>
                  <li>
                    <Image
                      src="/icons/Illustrator.svg"
                      alt="Adobe Illustrator Icon"
                      width={40}
                      height={40}
                    />
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
          </div>
        </section>

        <section className={styles.sectionContainer}>
          <div className={styles.projectDetails}>
            <div className={styles.leftColumn}>
              <div className={styles.sections}>
                <h1 className={styles.sectionTitle}>
                  Design Concept <DiProlog className={styles.designIcon} />
                </h1>
                <p className={styles.projectSummary}>
                  This series highlights each F1 driver and their car with bold
                  contrasts and vibrant, saturated colors, amplifying their energy.
                </p>
                <p className={styles.projectSummary}>
                  Neon accents, gradients, and noise effects further enhance the
                  sleek, high-energy aesthetic, mirroring the speed and innovation
                  of F1.
                </p>
              </div>
            </div>

            <div className={styles.rightColumn}>
              <Image
                src="/images/projects/F1/F1_thumbnail.png"
                alt="F1 posters mockup"
                width={800}
                height={400}
                className={styles.largeImage}
                onClick={() => setSelectedImage("/images/projects/F1/F1_thumbnail.png")}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          {selectedImage && (
            <ImageModal
              src={selectedImage}
              alt="F1 posters"
              onClose={() => setSelectedImage(null)}
            />
          )}
        </section>

        {/* Full posters */}
        <div className={styles.fullPosters}>
          <Image
                src="/images/projects/F1/norris-design.png"
                alt="F1 posters mockup"
                width={800}
                height={400}
                className={styles.largeImage}
                onClick={() => setSelectedImage("/images/projects/F1/norris-design.png")}
                style={{ cursor: "pointer" }}
          />
          <Image
                src="/images/projects/F1/max-design.png"
                alt="F1 posters mockup"
                width={800}
                height={400}
                className={styles.largeImage}
                onClick={() => setSelectedImage("/images/projects/F1/max-design.png")}
                style={{ cursor: "pointer" }}
          />
          <Image
                src="/images/projects/F1/louis-design.png"
                alt="F1 posters mockup"
                width={800}
                height={400}
                className={styles.largeImage}
                onClick={() => setSelectedImage("/images/projects/F1/louis-design.png")}
                style={{ cursor: "pointer" }}
          />
        </div>


        {/* Additional images */}
        <div className={styles.additionalImages}>
          <h3 className="text-center"> More Mockups </h3>
          <ImageCarouselModal className={styles.projectImage_Special} images={postersMockup} /> 
          {/* <Image
            src="/images/projects/F1/F1_Bustop.png"
            alt="F1 bus stop poster"
            width={800}
            height={400}
            className={styles.projectImage_Special}
          /> */}
          {/* <div className={styles.additionalImagesGrid}>
            <Image
              src="/images/projects/F1/Max.png"
              alt="F1-driver Max Verstappen"
              width={800}
              height={400}
              className={styles.projectImage}
            />
            <Image
              src="/images/projects/F1/Norris revised.png"
              alt="F1-driver Lando Norris"
              width={800}
              height={400}
              className={styles.projectImage}
            /> */}
            {/* <Image
              src="/images/projects/F1/Lewis.png"
              alt="F1-driver Lewis Hamilton"
              width={800}
              height={400}
              className={styles.projectImage}
            /> */}
          {/* </div> */}
        </div>

        <div className={styles.nextProject}>
          <Link href="/projects/ford-poster">
            <button className={styles.nextButton}>
              See Next
              <FaHandPointRight className={styles.nextArrow} />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
