"use client";
import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import { GoArrowUpRight } from "react-icons/go";
import { FaAddressCard } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";


const HeroSection = () => {
    return (
    <section> 
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className={styles['greeting__container']}>
                    <span className={`${styles.greeting}`}>Hello, I'm {" "}</span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Gloria Chan',
                            1000, 
                            'UX/UI Designer',
                            1000,
                            'Digital Marketer',
                            1000,
                            'Project Manager',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                </h1>
                <p className={styles['description']}>
                    combines <span className={styles['span']}>Resilience</span>, <span className={styles['span']}>Innovation</span>, and <span className={styles['span']}>Adaptability</span> to create human-centered designs with <span className={styles['span']}>infinite possibilities</span>.
                </p>
                <div className={styles['buttons']}>
                <Link href="/projects" passHref>
                    <button className={styles.button__left}>See my work <GoArrowUpRight className={`${styles.goArrow}`}/></button>
                </Link> 
                    <button className={styles.button__right}>
                        <span className="block bg-[#fff0df] hover:bg-orange-100 rounded-full px-5 py-2" >More about me <FaAddressCard/></span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                {/* <div className="rounded-full bg-[#fbe8cf] w-[300px] h-[300px] relative"> */}
                    <Image 
                        className={styles['logo']}
                        src="/Logo.png"
                        alt="My Logo"
                        width={300}
                        height={300}
                    />  
                {/* </div>  */}
            </div>
        </div>
    </section>
    );
};

export default HeroSection;