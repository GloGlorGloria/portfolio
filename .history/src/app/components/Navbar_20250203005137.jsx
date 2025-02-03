"use client"
import styles from "./Navbar.module.css";
import Link from "next/link";
import React, {useState} from 'react'
import Image from 'next/image'
import NavLink from "./NavLink";
import { BiMenuAltRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title:"About",
        href: "/about",
    },
    {
        title:"Projects",
        href: "/projects",
    },
    // {
    //     title:"Resume",
    //     path: "#resume",
    // },
    {
        title:"Contact",
        href: "/contact",
    },
]
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className={`${styles.nav}`}>
        <div className={`${styles.navbar}`}>
            <Link href={"/"}>
                <Image className={`${styles.homeIcon}`} src="/GloGlorGloria.png" alt="Home icon" width={300} height={150} />
            </Link>
            <div className="mobile menu block md:hidden">
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-4 py-2 border rounded border-slate-800 text-slate-800 hover:text-black hover:border-black">
                            <BiMenuAltRight />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-4 py-2 border rounded border-slate-800 text-slate-800 hover:text-black hover:border-black">
                            <CgClose/>
                        </button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className={`${styles.links}`}>
                   {
                    navLinks.map((link,index)=> (
                        <li key={index}>
                            <NavLink href={link.href} title={link.title}/>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
 
  )
}

export default Navbar
