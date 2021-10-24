import React, { useEffect } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'

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
      <Switch>
        <Home exact path='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
