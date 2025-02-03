"use client";
import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { FaLinkedin, FaBehance } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
    <footer className={styles.footer__Container}>
      <div
        className={`${
          isFooterVisible ? styles.socialIconsHorizontal : styles.socialIconsVertical
        } flex gap-2 md:fixed md:bottom-10 md:z-50 md:transition-transform md:duration-300 md:flex md:flex-col`}
      >
        <a
          href="https://www.linkedin.com/in/whchan-gloria"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcons}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:gloglorgloria@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcons}
        >
          <MdEmail />
        </a>
        <a
          href="https://www.behance.net/winghungchan"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcons}
        >
          <FaBehance />
        </a>
      </div>

      <div id="footer" className={styles.footer}>
        <p>GloGlorGloria</p>
        <p>© Wing Hung Chan Gloria | 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
