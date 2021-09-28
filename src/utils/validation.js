const loginRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i
const passwordRegex = /[a-zA-Z0-9]/i

export const getLoginErrorDescription = (login) => {
  if (login.length < 5) return 'Длина логина не может быть меньше 5'
  if (!loginRegex.test(login)) return 'Проверьте правильность введённого логина'
  return null
}

export const getPasswordErrorDescription = (password) => {
  if (password.length < 8) return 'Минимальная длина пароля: 8 символов'
  if (!passwordRegex.test(password))
    return 'Допустимы только латинские буквы и цифры'

  return null
}
