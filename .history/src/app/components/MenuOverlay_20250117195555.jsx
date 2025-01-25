import React from 'react'
import NavLink from './NavLink'
import styles from './MenuOverlay.module.css'


const MenuOverlay = ({ links }) => {
  return (
    <ul className={`${styles.nav__menu}`}>
      {(link, index) => (<NavLink href={link.path} title={link.title} key={index} />)}
    </ul>
  )
}

export default MenuOverlay
