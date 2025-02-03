import React from "react";
import styles from "./Footer.module.css";
import { FaLinkedin, FaBehance } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className={styles.footer__Container}>
      <div className="flex gap-2 md:fixed md:bottom-10 md:z-50 md:transition-transform md:duration-300 md:flex md:flex-col">
        <a
          href="https://www.linkedin.com/in/whchan-gloria"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcons}
        >
          <FaLinkedin/>
        </a>
        <a
          href="mailto:gloglorgloria@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-full w-10 h-10 flex justify-center items-center transition-colors duration-700 transform text-orange shadow-md hover:border-black hover:text-black">
            <MdEmail/>
        </a>
        <a
          href="https://www.behance.net/winghungchan"
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-full w-10 h-10 flex justify-center items-center transition-colors duration-700 transform text-orange shadow-md hover:border-black hover:text-black">
            <FaBehance/>
        </a>
      </div>

      <div className={styles.footer}>
        <p>GloGlorGloria</p>
        <p>© Wing Hung Chan Gloria | 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
