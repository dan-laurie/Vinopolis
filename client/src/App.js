import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pulse from 'react-reveal/Pulse'
import axios from 'axios'
import Home from './components/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Catalogue from './components/catalogue/Catalogue'
import SingleWine from './components/catalogue/SingleWine'


function App() {

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
        <Route exact path='/wines'>
          <Catalogue  />
        </Route>
        <Route exact path='/wines/:id'>
          <SingleWine  />
        </Route>
      </Switch>
      <Pulse>
        <Footer />
      </Pulse>
    </BrowserRouter>
  )
}

export default App
