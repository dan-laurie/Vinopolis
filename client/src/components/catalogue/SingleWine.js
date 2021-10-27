import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import Slide from 'react-reveal/Slide'

const SingleWine = () => {

  const [ wine, setWine ] = useState([])
  const [ grapes, setGrapes ] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getWine = async () => {
      try {
        const { data } = await axios(`/api/wines/${id}`)
        setWine(data)
        setGrapes(data.grapes)
        console.log(data.grapes)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getWine()
  },[id])


  return (
    <>
      { wine ? 
        <><Helmet>
          <title>Vinopolis | {wine.name} </title>
        </Helmet><div className="single-page">
          <Slide top>
            <h2>{wine.name}</h2>
          </Slide>
          <div className="single-top d-flex justify-content-center align-items-center">
            <Slide left>
              <img src={wine.big_pic} alt="" />
            </Slide>
            <div className="wine-bio">
              <Slide right>
                <div className="wine-flag">
                  <h4>{wine.country}</h4>
                  <img src={wine.flag} alt="" />
                </div>
                <p>{wine.bio}</p>
                <h6>Grapes 🍇</h6>
                <ul>
                  {grapes.map((grape, i) => {
                    return <li key={i}>{grape.name}</li>
                  })}
                </ul>
              </Slide>
            </div>
          </div>
          <Slide bottom>
            <div className="pairings">
              <h4>Sommelier&apos;s Suggested Pairings</h4>
              <p>{wine.pairings}</p>
            </div>
            <div className="actions">
              <button className="buy-btn"><a href="https://www.majestic.co.uk/" rel="noreferrer" target="_blank">Buy Now</a></button>
              <button className="cellar-btn">Add to Cellar</button>
            </div>
          </Slide>
        </div></>
        :
        <h2>No Wine Found</h2>
      }
    </>
  )
}

export default SingleWine