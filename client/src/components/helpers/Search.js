import React, { useEffect, useState } from 'react'

const Search = ({ wines, setFilteredWines }) => {

  const [ filters, setFilters ] = useState({ searchTerm: '' })

  useEffect(() => {
    const regexSearch = new RegExp(filters.searchTerm, 'i')
    setFilteredWines(wines.filter(wine => {
      return regexSearch.test(wine.name)
    }))
  }, [setFilteredWines, filters, wines])

  const handleFilterChange = (event) => {
    const newObj = { ...filters, [event.target.name]: event.target.value }
    console.log('New Obj', newObj)
    setFilters(newObj)
  }

  return (
    <>
      <input onChange={handleFilterChange} name="searchTerm" value={filters.searchTerm} placeholder='Search Wine 🔎' className='search-bar'/>
    </>
  )
}

export default Search