import './App.css'

import { Login } from './Pages/Login/Login'
import { hotelsAPI } from './api/hotels'

function App() {
  console.log(hotelsAPI)
  const f = () => {
    hotelsAPI.fetchHotels({
      location: 'UK',
      checkIn: '2021-09-29',
      checkOut: '2021-10-10',
    })
  }
  return (
    <div className="App">
      <Login />
    </div>
  )
}

export default App
