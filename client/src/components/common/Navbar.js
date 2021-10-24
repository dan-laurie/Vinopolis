import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://i.imgur.com/lr0MJZO.png" width="112" height="28"/>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

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
                <Link to="/contact">Contact Us</Link>
              </a>
            </div>
          </div>
        </div>

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
      </div>
    </nav>
  )
}
export default Navbar