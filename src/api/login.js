const users = [
  { login: 'test@test.com', password: '123qwerty' },
  { login: 'test1@test.com', password: '123qwerty' },
  { login: 'test3@test.com', password: '123qwerty' },
]

export const fakeLoginApi = {
  authUser(login, password, errorCb) {
    const user = users.find((user) => user.login === login)
    if (!user) {
      return 'Пользователь с такой почтой не найден'
    }
    if (user.password !== password) {
      return 'Неверный пароль'
    }
    return user
  },
}
