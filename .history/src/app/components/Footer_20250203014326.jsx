"use client";
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaBehance } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Footer.module.css"; 

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);


  const checkIfFooterIsVisible = () => {
    const footerElement = document.getElementById("footer");
    const footerPosition = footerElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerPosition <= windowHeight) {
      setIsFooterVisible(true);
    } else {
      setIsFooterVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfFooterIsVisible);

    return () => {
      window.removeEventListener("scroll", checkIfFooterIsVisible);
    };
  }, []);

  return (
    <footer className={styles.footer__container}>
      <div id="footer" className={styles.footer}>
        <h2 className="font-bold">Let's Connect!</h2>
        <p>© Wing Hung Chan Gloria | 2025</p>
      </div>

      <div
        className={`${styles.socialIcons__container} ${
          isFooterVisible ? styles.socialIconsHorizontal : styles.socialIconsVertical
        }`}
      >
        <a
          href="https://www.linkedin.com/in/whchan-gloria"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:gloglorgloria@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <MdEmail />
        </a>
        <a
          href="https://www.behance.net/winghungchan"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FaBehance />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
