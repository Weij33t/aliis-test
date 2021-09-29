import React from 'react'
import { Caret } from './../Icons/Caret'

import styles from './SortButton.module.css'

export const SortButton = ({ text, isAsc, isActive, ...rest }) => {
  return (
    <div className={styles.SortButton} {...rest}>
      {text}
      <Caret isAsc={isActive && !isAsc} className={styles.Up} />
      <Caret isAsc={isActive && isAsc} className={styles.Down} />
    </div>
  )
}
