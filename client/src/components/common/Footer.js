import React from 'react'
import Pulse from 'react-reveal/Pulse'

const Footer = () => {
  return (
    <Pulse>
      <footer>
        <hr className="footer-top"/>
        <div className="links-group d-flex justify-content-center align-items-center">
          <div className="links-1">
            <ul>
              <li><a href="https://www.wsetglobal.com/" rel="noreferrer" target="_blank"><strong>WSET</strong></a></li>
              <li><a href="https://londonwineacademy.com/" rel="noreferrer" target="_blank"><strong>Wine Courses</strong></a></li>
              <li><a href="https://www.wine-searcher.com/" rel="noreferrer" target="_blank"><strong>Wine Price Index</strong></a></li>
            </ul>
          </div>
          <div className="links-2">
            <ul>
              <li><a href="https://www.linkedin.com/in/danlauriedev/" rel="noreferrer" target="_blank"><strong>LinkedIn</strong></a></li>
              <li><a href="https://github.com/dan-laurie" rel="noreferrer" target="_blank"><strong>GitHub</strong></a></li>
              <li><a href="https://www.instagram.com/dan.laurie/?hl=en" rel="noreferrer" target="_blank"><strong>Instagram</strong></a></li>
            </ul>
          </div>
        </div>
        <hr/>
        <div className="copy">
          <p>Made by Dan Laurie</p>
          <p>&copy;2021 Vinopolis Ltd</p>
        </div>
      </footer>
    </Pulse>
  )
}

export default Footer