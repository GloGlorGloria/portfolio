"use client"
import styles from "./Navbar.module.css";
import Link from "next/link";
import React, {useState} from 'react'
import Image from 'next/image'
import NavLink from "./NavLink";

const navLinks = [
    {
        title:"About",
        path: "#about",
    },
    {
        title:"Projects",
        path: "#projects",
    },
    // {
    //     title:"Resume",
    //     path: "#resume",
    // },
    {
        title:"Contact",
        path: "#contact",
    },
]
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className={`${styles.nav}`}>
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href={"/"}>
                <Image className={`${styles.homeIcon}`} src="/GloGlorGloria.png" alt="Home icon" width={300} height={150} />
            </Link>
            <div className="menu block md:w-auto" id="navbar">
                <ul className={`${styles.links}`}>
                   {
                    navLinks.map((link,index)=> (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>

    </nav>
 
  )
}

export default Navbar
