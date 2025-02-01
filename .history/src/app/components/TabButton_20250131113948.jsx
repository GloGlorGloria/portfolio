import styles from './TabButton.module.css';

import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
  return (
    <div>
      <button className={styles.about__span}>Skills</button>
    </div>
  )
}

export default TabButton


