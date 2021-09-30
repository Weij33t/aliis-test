import './App.css'

import { Login } from './Pages/Login/Login'
import { Route, Switch, useHistory } from 'react-router'
import { useEffect } from 'react'
import { Hotels } from './Pages/Hotels/Hotels'

function App() {
  const history = useHistory()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) history.replace('/hotels')
    else history.replace('/')
  }, [])
  return (
    <div className="App">
      <Switch>
        <Route path={'/'} exact component={Login} />
        <Route path={'/hotels'} exact component={Hotels} />
      </Switch>
    </div>
  )
}

export default App
