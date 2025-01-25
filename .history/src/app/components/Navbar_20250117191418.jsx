"use client"
import styles from "./Navbar.module.css";
import Link from "next/link";
import React, {useState} from 'react'
import Image from 'next/image'
import NavLink from "./NavLink";
import { BiMenuAltRight } from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";

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
        <div className="flex flex-wrap items-center justify-between px-4 md:p-4 mx-auto">
            <Link href={"/"}>
                <Image className={`${styles.homeIcon}`} src="/GloGlorGloria.png" alt="Home icon" width={300} height={150} />
            </Link>
            <div className="mobile menu block md:hidden">
                {
                    navbarOpen ? (
                        <button className="flex items-center px-3 py-2 border rounded border-slate-800 text-slate-200 hover:text-black hover:border-white">
                            <BiMenuAltRight className="h-5 w-5" />
                        </button>
                    ) : (
                        <button className="flex items-center px-3 py-2 border rounded border-slate-800 text-slate-200 hover:text-black hover:border-white">
                            <CgCloseO />
                        </button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
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
