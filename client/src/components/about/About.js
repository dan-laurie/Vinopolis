import React from 'react'
import Slide from 'react-reveal/Slide'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <><Helmet>
      <title>Vinopolis | About</title>
    </Helmet><div className="edu-content">
      <Slide top>
        <h2 className="education-title">About</h2>
      </Slide>
      <Slide top>
        <p className="edu-intro">A solo 1 week project for General Assembly&apos;s SEI!</p>
        <p className="edu-intro">Having previously taken WSET&apos;s Level 2 in Wine, I have always had a passion for wines so I though it would be appropriate to make my final project somewhat related!</p>
      </Slide>
      <div className="technologies">
        <Slide left>
          <h3>Technologies Used</h3>
        </Slide>
        <Slide right>
          <div className="devicons">
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i className="devicon-sass-original colored"></i>
            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-python-plain-wordmark colored"></i>
            <i className="devicon-django-plain colored"></i>
            <i className="devicon-npm-original-wordmark colored"></i>
            <i className="devicon-yarn-plain-wordmark colored"></i>
          </div>
        </Slide>
      </div>
      <div className="socials">
        <Slide left>
          <h3>Socials</h3>
        </Slide>
        <Slide right>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/danlauriedev/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin fa-3x"></i></a>
            <a href="https://github.com/dan-laurie" rel="noreferrer" target="_blank"><i className="fab fa-github fa-3x"></i></a>
            <a href="mailto:daniel.michael.laurie@gmail.com"><i className="fas fa-at fa-3x"></i></a>
          </div>
        </Slide>
      </div>
    </div></>
  )
}
export default About