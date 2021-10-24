import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

function App() {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios('/api/wines') 
      console.log(data)
    }
    getData()
  })

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route  exact path='/'>
          <Home />
        </Route>
        <Route exact path='/register'>
          <Register  />
        </Route>
        <Route exact path='/login'>
          <Login  />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
