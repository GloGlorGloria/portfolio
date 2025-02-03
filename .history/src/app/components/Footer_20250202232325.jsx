import React from 'react'
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="flex gap-2 md:fixed md:bottom-10 md:z-50 md:transition-transform md:duration-300 md:flex md:flex-col">
        <a href="https://www.linkedin.com/in/gloriachanwh/" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/linkedin.svg" alt="LinkedIn" className="w-10 h-10" />
        </a>
        <a href="https://www.instagram.com/gloglorchan/" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/instagram.svg" alt="Instagram" className="w-10 h-10" />
    </div>
    <div className={styles.footer}>
        <p>GloGlorGloria</p>
        <p>© Wing Hung Chan Gloria | 2025</p>
    </div>

  )
}

export default Footer
