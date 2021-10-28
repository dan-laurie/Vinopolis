import React, { useState, useEffect } from 'react' 
import { Link, useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import Slide from 'react-reveal/Slide'
import { getTokenFromLocalStorage } from '../helpers/auth'
import { Helmet } from 'react-helmet'

const Review = () => {

  const history = useHistory() 
  const [ wine, setWine ] = useState(null)

  const { id } = useParams()

  const token = getTokenFromLocalStorage()

  const [ formData, setFormData ] = useState({
    text: '',
    wine: `${id}`,
  })

  const [ errors, setErrors ] = useState({
    text: '',
    wine: '',
  })

  useEffect(() => {
    const getWine = async () => {
      try {
        const { data } = await axios(`/api/wines/${id}`)
        setWine(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getWine()
  },[id])

  const handleChange = (e) => {
    const newObject = { ...formData, [e.target.name]: e.target.value }
    setFormData(newObject)
    const newErrors = { ...errors, [e.target.name]: '' }
    setErrors(newErrors)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await axios.post('/api/reviews/', 
        formData, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      history.push(`/wines/${id}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Helmet>
        <title>Vinopolis | Review </title>
      </Helmet>
      <div className="back-button">
        <Link to={`/wines/${id}`}><strong>Back to Wine</strong></Link>
      </div>
      <Slide left>
        <div className="reg-info">
          { wine ?
            <p className="review-text">Leave a review for: <br /> {wine.name}</p>
            :
            <p className="review-text">Leave a review</p>
          }
          
        </div>
      </Slide>

      <Slide right>
        <div className="form-page">
          <div className="container">
            <div className="row">
              <form className="review-form col-10 offset-1 mt-4 col-md-10 offset-md-3" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label className="review-label"><h3>Your Review</h3></label>
                  <div className="control">
                    <textarea onInput={handleChange}
                      className="textarea"
                      name="text"
                      value={formData.text} />
                  </div>
                </div>         
                <div className="form-field">
                </div>
                <div className="field">
                  <button className="button" type="submit">Post Review!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Slide>
    </>
  )
}

export default Review