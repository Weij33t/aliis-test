import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { fakeLoginApi } from '../../api/login'
import { Button } from '../../Components/Shared/Button/Button'
import { Input } from '../../Components/Shared/Input/Input'
import {
  getLoginErrorDescription,
  getPasswordErrorDescription,
} from '../../utils/validation'

import styles from './Login.module.css'

export const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({
    login: null,
    password: null,
    auth: null,
  })

  const history = useHistory()

  const loginHandler = (e) => {
    setError({ ...error, login: null })
    setLogin(e.target.value)
  }
  const passwordHandler = (e) => {
    setError({ ...error, password: null })
    setPassword(e.target.value)
  }

  const validateFields = () => {
    const loginErrorDescription = getLoginErrorDescription(login)
    const passwordErrorDescription = getPasswordErrorDescription(password)
    if (!loginErrorDescription && !passwordErrorDescription) {
      authUser()
    } else {
      setError({
        ...error,
        login: loginErrorDescription,
        password: passwordErrorDescription,
      })
    }
  }

  const authUser = () => {
    const response = fakeLoginApi.authUser(login, password)
    if (typeof response === 'string') {
      setError({ ...error, auth: response })
    } else {
      localStorage.setItem('user', JSON.stringify(response))

      history.replace('/hotels')
    }
  }
  return (
    <div className={styles.LoginContainer}>
      <div className={styles.Login}>
        <div>
          <h1 className={styles.LoginHeader}>Simple Hotel Check</h1>
          <span className={styles.AuthError}>{error.auth}</span>
        </div>
        <Input
          onChange={loginHandler}
          error={error.login}
          value={login}
          label={'Логин'}
        />
        <Input
          onChange={passwordHandler}
          error={error.password}
          value={password}
          label={'Пароль'}
        />
        <Button onClick={validateFields} value={'Войти'} />
      </div>
    </div>
  )
}
