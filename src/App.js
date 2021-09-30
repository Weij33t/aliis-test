import './App.css'

import { Login } from './Pages/Login/Login'
import { hotelsAPI } from './api/hotels'
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
  // const f = () => {
  //   hotelsAPI.fetchHotels({
  //     location: 'UK',
  //     checkIn: '2021-09-29',
  //     checkOut: '2021-10-10',
  //   })
  // }
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
