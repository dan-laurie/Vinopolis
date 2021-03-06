import React from 'react'
import { Link } from 'react-router-dom'
import { userIsAuthenticated } from './helpers/auth'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Vinopolis | Home</title>
      </Helmet>
      <div className="title-img">
        <Slide left>
          <img className="title-img" src="https://i.imgur.com/lr0MJZO.png"></img>
        </Slide>
      </div>
      
      <Slide right>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://i.imgur.com/OI5SLQW.jpg" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Rich Reds</h5>
                <p>Check out our fantastic range of lushious red wines!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://i.imgur.com/P8vRt9A.jpg" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Fresh Whites</h5>
                <p>Check out our fantastic range of fresh white wines!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://i.imgur.com/FDVi8ZU.jpg" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Fruitful Ros??&apos;s</h5>
                <p>Check out our fantastic range of fruitful ros?? wines!</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Slide>

      <Fade left>
        <div className="gen-info">
          <h2 className="#about-us">About Us</h2>
          <p>Here at Vinopolis, we want to unite wine lovers from all over the world!</p>
          <p>Browse our catalogue, leave reviews, join the Vinopolis community!</p>
          { userIsAuthenticated() ?
            <Link to="/wines"><strong>To the Catalogue</strong></Link>
            :
            <Link to="/login"><strong>To the Catalogue</strong></Link>
          }
        </div>
      </Fade>

      <Fade left>
        <div className="gen-info">
          <h2 className="#education">Education</h2>
          <p>Interested in taking Wine certification? Look no further! Our team of sommeliers can recommend courses to take.</p>
          <p>Start your journey to become a wine connoisseur</p>
          { userIsAuthenticated() ?
            <Link to="/education"><strong>To Courses</strong></Link>
            :
            <Link to="/login"><strong>To Courses</strong></Link>
          }
          
        </div>
      </Fade>
    </>
  )
}

export default Home