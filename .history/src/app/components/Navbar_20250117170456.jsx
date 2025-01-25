import styles from "./Navbar.module.css";

import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href={"/"} className="text-5xl text-blue">Logo</Link>
            <div className="menu">

            </div>
        </div>

    </nav>
 
  )
}

export default Navbar
