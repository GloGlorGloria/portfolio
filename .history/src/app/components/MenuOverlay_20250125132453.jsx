"use client"
import React from 'react'
import NavLink from './NavLink'
import styles from './MenuOverlay.module.css'


const MenuOverlay = ({ links }) => {
  return (
    <ul className={`${styles.nav__menu}`}>
      {links.map((link, index) => (
        <li key={index}>
            <NavLink href={link.href} title={link.title}/>
        </li>))}
    </ul>
  )
}

export default MenuOverlay
