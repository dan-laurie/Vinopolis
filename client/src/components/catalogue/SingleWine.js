import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import Slide from 'react-reveal/Slide'
import { getPayload, getTokenFromLocalStorage } from '../helpers/auth'

const SingleWine = () => {

  const token = getTokenFromLocalStorage()

  const [ toggle, setToggle ] = useState(false)
  const [ wine, setWine ] = useState(null)
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

  const userIsOwner = (ownerId) => {
    const payload = getPayload()
    if (!payload) return
    return ownerId === payload.sub
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDelete = useCallback(async (e) => {
    try {
      await axios.delete(`/api/reviews/${e.target.name}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (!toggle) {
        setToggle(true)
      } else {
        setToggle(false)
      }
    } catch (err) {
      console.log(err)
    }
  })

  useEffect(() => {}, [handleDelete])

  return (
    <>
      { wine ? 
        <>
          <Helmet>
            <title>Vinopolis | {wine.name}</title>
          </Helmet>
          <div className="back-button">
            <Link to="/wines"><strong>Back to Wines</strong></Link>
          </div>
          <div className="single-page">
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
                <button className="buy-btn"><Link to={`/wines/${id}/review`}>Leave a Review</Link></button>
              </div>
            </Slide>
            { wine.reviews.length > 0 ?
              <>
                <div className="pairings">
                  <h4>Reviews</h4>
                </div>
                <div className="review-box d-flex flex-column align-items-center mt-5">
                  {wine.reviews.map(w => {
                    const time = new Date(w.created_at)
                    return (
                      <div className="review-post" key={w.id}>
                        <div className="name">
                          <p><strong>{w.owner.first_name}</strong></p>
                        </div>
                        <div className="review-text">
                          <p className="text-post">{w.text}</p>
                        </div>
                        <div className="review-bottom d-flex mt-5">
                          <p>{time.toLocaleString()}</p>
                          {userIsOwner(w.owner.id) && 
                      <button className='delete-button' onClick={handleDelete} name={w.id}>Delete</button>
                          }
                        </div>
                      </div>
                    )
                  })}
                </div>
              </>
              :
              <>
              </>
            }

          </div></>
        :
        <h2>No Wine Found</h2>
      }
    </>
  )
}

export default SingleWine