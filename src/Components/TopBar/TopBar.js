import React from 'react'

import styles from './TopBar.module.css'
import { Logout } from './../Shared/Icons/Logout'
import { useHistory } from 'react-router'

export const TopBar = () => {
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('user')
    history.replace('/')
  }

  return (
    <div className={styles.TopBar}>
      <span className={styles.Title}>Simple Hotel Check</span>
      <button className={styles.LogoutButton} onClick={logout}>
        Выйти <Logout />
      </button>
    </div>
  )
}
