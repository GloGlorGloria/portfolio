import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
    return (
    <section> 
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className={styles['greeting']}>
                    Hello, I'm Gloria CHAN!
                </h1>
                <p className={styles['description']}>
                    combines <span className={styles['span']}>R</span>esilience, <span className={styles['span']}>I</span>nnovation, and <span className={styles['span']}>A</span>daptability to create human-centered designs with <span className={styles['span']}>infinite possibilities</span>.
                </p>
            </div>
            <div className="col-span-5">
                {/* <div className="rounded-full bg-[#fbe8cf] w-[300px] h-[300px] relative"> */}
                    <Image className="logo"
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