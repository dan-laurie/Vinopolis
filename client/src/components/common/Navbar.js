import React from 'react'

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
            Home
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="#about-us">
                About
              </a>
              <a className="navbar-item">
                Education
              </a>
              <a className="navbar-item">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="signup button">
                <strong>Sign up</strong>
              </a>
              <a className="login button">
                <strong>Log in</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar