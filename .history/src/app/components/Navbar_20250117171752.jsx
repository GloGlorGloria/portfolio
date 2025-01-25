import styles from "./Navbar.module.css";
import Link from "next/link";
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href={"/"} className="text-5xl text-blue font-semibold">
                <Image src="/GloGlorGloria.png" alt="Home icon" width={250} height={250} />
            </Link>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul>
                    <li>
                        <Link href={"#about"} className="block py-2 pl-3 pr-4 text=[#1f2456] sm:text-xl rounded md:p-0 hover:text-black">About</Link>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
 
  )
}

export default Navbar
