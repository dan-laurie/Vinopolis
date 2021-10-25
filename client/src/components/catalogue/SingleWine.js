import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

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
        <div className="single-page">
          <h2>{wine.name}</h2>
          <div className="single-top d-flex justify-content-center align-items-center">
            <img src={wine.big_pic} alt="" />
            <div className="wine-bio">
              <div className="wine-flag">
                <h4>{wine.country}</h4>
                <img src={wine.flag} alt="" />
              </div>
              <p>{wine.bio}</p>
              <h6>Grapes:</h6>
              <ul>
                {grapes.map((grape, i) => {
                  return <li key={i}>{grape.name}</li>
                })}
              </ul>
            </div>
          </div>
          <div className="pairings">
            <h5>Sommelier&apos;s Suggested Pairings</h5>
            <p>{wine.pairings}</p>
          </div>
        </div>
        :
        <h2>No Wine Found</h2>
      }
    </>
  )
}

export default SingleWine