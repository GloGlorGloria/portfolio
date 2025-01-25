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
    {
        title:"Contact",
        path: "#contact",
    },
]
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className={`${styles.nav}`}>
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href={"/"} className="text-5xl text-blue font-semibold">
                <Image src="/GloGlorGloria.png" alt="Home icon" width={250} height={250} />
            </Link>
            <div className="menu block md:w-auto" id="navbar">
                <ul>
                   {
                        NavLinks.map((link,index)=> (
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
