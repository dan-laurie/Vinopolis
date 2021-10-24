import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossOrigin="anonymous"
      ></script> */}
      <div className="title-img">
        <img className="title-img" src="https://i.imgur.com/lr0MJZO.png"></img>
      </div>
      
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="c-pic d-block" src="https://i.imgur.com/OI5SLQW.jpg" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="c-pic d-block" src="https://i.imgur.com/P8vRt9A.jpg" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="c-pic d-block" src="https://i.imgur.com/FDVi8ZU.jpg" alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
      </div>

      <div className="gen-info">
        <h2 className="#about-us">About Us</h2>
        <p>Here at Vinopolis, we want to unite wine lovers from all over the world!</p>
        <p>Browse our catalogue, leave reviews or contribute to the Vinopolis community!</p>
        <Link to="/wines"><strong>To the Catalogue</strong></Link>
      </div>

      <div className="gen-info">
        <h2 className="#education">Education</h2>
        <p>Interested in taking Wine certification? Look no further! Our team of sommeliers can recommend courses to take.</p>
        <p>Start your journey to become a wine connoisseur</p>
        <Link to="/education"><strong>To Courses!</strong></Link>
      </div>
    </>
  
  
  )
}

export default Home