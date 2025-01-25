import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import { GoArrowUpRight } from "react-icons/go";
import { FaAddressCard } from "react-icons/fa";

import { TypeAnimation } from 'react-type-animation';

    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce food for Mice',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce food for Hamsters',
        1000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />

const HeroSection = () => {
    return (
    <section> 
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className={styles['greeting__container']}>
                    <span className={`${styles.greeting}`}>Hello, I'm {" "}</span>
                    Gloria CHAN!
                </h1>
                <p className={styles['description']}>
                    combines <span className={styles['span']}>R</span>esilience, <span className={styles['span']}>I</span>nnovation, and <span className={styles['span']}>A</span>daptability to create human-centered designs with <span className={styles['span']}>infinite possibilities</span>.
                </p>
                <div className={styles['buttons']}>
                    <button className={`${styles.button__left}`}>See my work <GoArrowUpRight className={`${styles.goArrow}`}/></button>
                    <button className={`${styles.button__right}`}>
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