import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Catalogue = () => {

  const [ wines, setWines ] = useState(null)


  useEffect(() => {
    const getWines = async () => {
      try {
        const { data } = await axios('api/wines/')
        setWines(data)
        
      } catch (err) {
        console.log(err)
      }
    }
    getWines()
  }, [])

  console.log(wines)

  return (
    <>
      <div className="catalogue-heading">
        <h2>Catalogue</h2>
        <p>Feel free to browse the Vinopolis database below, if you wish to view further information about a certain wine, please click on the desired wine!</p>
        <p>Happy Browsing!</p>
      </div>

      { wines ?
        wines.map((wine, i) => {
          return (
            <div className="wine-card" key={i}>
              <div className="wine-top">
                <img src={wine.big_pic} alt="wine" />
              </div>
              <div className="wine-origin">
                <h3><strong>{wine.name}</strong></h3>
                <div className="wine-flag">
                  <h4>{wine.country}</h4>
                  <span><img src={wine.flag} alt="" /></span>
                </div>
                <h6>Grapes:</h6>
                <ul>
                  {wine.grapes.map((grape, i) => {
                    return (
                      <li key={i}>{grape.name}</li>
                    )
                  })}
                </ul>
              </div>
              <div className="wine-price">
                <h5>RRP: £{wine.price}</h5>
              </div>
            </div>
          )
        })
        
        
        
        
        :
        <h2>No Wines Found...</h2>
      
      
      
      }

    </>
  ) 
}

export default Catalogue