import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import Slide from 'react-reveal/Slide'
import Search from '../helpers/Search'

const Catalogue = () => {

  const [ wines, setWines ] = useState(null)
  const [ filteredWines, setFilteredWines ] = useState([])
  const [ doubleFilteredWines, setDoubleFilteredWines ] = useState([])
  const [ updatedWines, setUpdatedWines ] = useState([])

  const { id } = useParams()

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

  useEffect(() => {
  }, [filteredWines])

  // console.log(wines)

  const handleFilters = (e) => {
    const countryFilteredArray = wines.filter(wine => wine.country === e.target.value)
    const typeFilteredArray = wines.filter(wine => wine.type === e.target.value)
    setFilteredWines(countryFilteredArray)
    setDoubleFilteredWines([ ...countryFilteredArray, ...typeFilteredArray ])
  }

  const handleType = (e) => {
    const filteredArray = wines.filter(wine => wine.type === e.target.value)
    setFilteredWines(filteredArray)
  }


  if (!wines) return null
  return (
    <>
      <Helmet>
        <title>Vinopolis | Catalogue </title>
      </Helmet>
      <div className="catalogue-heading">
        <h2>Catalogue</h2>
        <p>Feel free to browse the Vinopolis database below, if you wish to view further information about a certain wine, please click on the desired wine!</p>
        <p>Happy Browsing!</p>
      </div>

      <div className="select-filter">
  
        <div className="filter-1">
          
          <Search wines={wines} setFilteredWines={setFilteredWines} />
          <p>Filter by Country below:</p>
          <select name="filter" id="filter" onChange={handleFilters}>
            <option disabled defaultValue>Choose an Country</option>
            <option value="all">All</option>
            {wines.reduce((acc, wine) => {
              return !acc.includes(wine.country) ? [...acc, wine.country] : acc
            }, []).map((country, i) => {
              return (
                <option key={i} value={country}>{country}</option>
              )
            })}
          </select>
          <p>Filter by Type below:</p>
          <select name="filter" id="filter" onChange={handleType}>
            <option disabled defaultValue>Choose a Type</option>
            <option value="all">All</option>
            {wines.reduce((acc, wine) => {
              return !acc.includes(wine.type) ? [...acc, wine.type] : acc
            }, []).map((type, i) => {
              return (
                <option key={i} value={type}>{type}</option>
              )
            })}
          </select>
        </div>
      </div>

      {(filteredWines.length > 0 || doubleFilteredWines.length > 0 ? filteredWines : wines)
        .map((wine, i) => {
          return (
            <> 
              <Slide right className="Slide">           
                <div className="wine-card" key={i}>
                  <div className="wine-top">
                    <img src={wine.big_pic} alt="wine" />
                  </div>
                  <Link to={`/wines/${wine.id}`}>
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
                  </Link>
                  <div className="wine-price">
                    <h5>RRP: £{wine.price}</h5>
                  </div>
                </div>
              </Slide>  
            </>
          )
        })}      
    </>
  ) 
}

export default Catalogue