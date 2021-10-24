import React, { useEffect } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

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
        <Home exact path='/' />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
