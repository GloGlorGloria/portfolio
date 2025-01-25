"use client"
import styles from "./Navbar.module.css";
import Link from "next/link";
import React, {useState} from 'react'
import Image from 'next/image'
import NavLink from "./NavLink";

const navLink = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
]
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className={`${styles.nav}`}>
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href={"/"} className="text-5xl text-blue font-semibold">
                <Image src="/GloGlorGloria.png" alt="Home icon" width={250} height={250} />
            </Link>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul>
                    <li>
                        <NavLink/>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
 
  )
}

export default Navbar
