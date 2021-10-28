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
import Review from './components/auth/Review'
import Education from './components/education/Education'
import About from './components/about/About'



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
        <Route exact path='/wines/:id/review'>
          <Review  />
        </Route>
        <Route exact path='/education'>
          <Education  />
        </Route>
        <Route exact path='/about'>
          <About  />
        </Route>
      </Switch>
      <Pulse>
        <Footer />
      </Pulse>
    </BrowserRouter>
  )
}

export default App
