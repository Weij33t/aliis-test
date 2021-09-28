import React from 'react'
import styles from './Input.module.css'

export const Input = ({ label, error, ...rest }) => {
  return (
    <label
      className={`${styles.Label} ${error ? styles.Error : ''}`}
      htmlFor={rest.id}
    >
      {label}
      <input {...rest} className={styles.Input} />
      <span>{error}</span>
    </label>
  )
}
