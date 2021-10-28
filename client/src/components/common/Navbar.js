import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { userIsAuthenticated } from '../helpers/auth' 
import { getTokenFromLocalStorage } from '../helpers/auth'
import axios from 'axios'

const Navbar = () => {

  const token = getTokenFromLocalStorage()

  const history = useHistory()
  const location = useLocation()

  const [ user, setUser ] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios('api/auth/user/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setUser(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [token])

  useEffect(() => {
  }, [location.pathname])

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://i.imgur.com/lr0MJZO.png" width="112" height="28"/>
        </a>
      </div>
      { 
        userIsAuthenticated() ?
          
          <>
            {/* <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              // <span aria-hidden="true"></span>
            </a> */}
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">
                  <Link to="/">Home</Link>
                </a>
                <a className="navbar-item">
                  <Link to="/wines">Catalogue</Link>
                </a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                    More
                  </a>
                  <div className="navbar-dropdown">
                    <a className="navbar-item" href="#about-us">
                      <Link to="/about">About</Link>
                    </a>
                    <a className="navbar-item">
                      <Link to="/education">Education</Link>
                    </a>
                    <a className="navbar-item">
                      <Link to="/add">Add to Catalogue</Link>
                    </a>
                  </div>
                </div>
              </div>
              <div className="navbar-end">               
                {user ?
                  <p className="navbar-item mb-0">
                    {user.first_name}
                  </p>
                  :
                  <p className="navbar-item">
                      User
                  </p>
                }                   
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="logout button">
                      <span className="logout" onClick={handleLogout}><strong>Log Out</strong></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
          :
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="signup button">
                  <Link to="/register"><strong>Sign up</strong></Link>
                </a>
                <a className="login button">
                  <Link to="/login"><strong>Log in</strong></Link>
                </a>
              </div>
            </div>
          </div>
      }   
    </nav>
  )
}
export default Navbar