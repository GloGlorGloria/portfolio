import styles from './TabButton.module.css';

import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
const buttonClasses = active ? `${styles.about__span} ${styles.active}` : styles.about__span;

  return (
    <div>
      <button onClick={selectTab}>
        <p className={`mr-3 font-semibold text-xl hover:text-black ${buttonClasses}`}>
            {children}
        </p>
      </button>
    </div>
  )
}

export default TabButton


