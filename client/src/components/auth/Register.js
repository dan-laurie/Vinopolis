import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import ImageUpload from '../profile/ImageUpload'
import Slide from 'react-reveal/Slide'

const Register = () => {

  const history = useHistory()

  const [ formData, setFormData ] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
  })

  const [ errors, setErrors ] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
  })

  const handleChange = (event) => {
    try {
      const newObj = { ...formData, [event.target.name]: event.target.value }
      setFormData(newObj)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {                 
      await axios.post('api/auth/register/', formData) 
      history.push('/login')
    } catch (err) {
      console.log('ERROR!', err.response.data.errors)
      setErrors(err.response.data.errors)
      console.log(errors) 
    }
  }

  const handleImageUrl = (url) => {
    setFormData({ ...formData, profile_image: url })
  }
  return (

    <>
      <Helmet>
        <title>Vinopolis | Register </title>
      </Helmet>
      <div className="register">
        <Slide left>
          <div className="reg-info">
            <h2> Getting Started</h2>
            <p>In order to utilise all of Vinopolis&apos; features, please sign up for an account using the form below!</p>
          </div>
        </Slide>
      </div>

      <Slide right>
        <div className="register-page">
          <div className="form-page">
            <div className="container">
              <div className="row">
                <form onSubmit={handleSubmit} className="col-10 offset-1 mt-4 col-md-6 offset-md-3">
                  <h3>Sign Up</h3>
                  <div className="form-field">
                    <label htmlFor="first_name">First Name</label>
                    <input onInput={handleChange} type="text" name="first_name" placeholder="First Name" />
                    {/* {errors.first_name && <p className="error">{errors.first_name.message}</p>} */}
                  </div>
                  <div className="form-field">
                    <label htmlFor="last_name">Last Name</label>
                    <input onInput={handleChange} type="text" name="last_name" placeholder="Last Name" />
                    {/* {errors.last_name && <p className="error">{errors.last_name.message}</p>} */}
                  </div>
                  <div className="form-field">
                    <label htmlFor="username">Username</label>
                    <input onInput={handleChange} type="text" name="username" placeholder="Username" />
                    {/* {errors.username && <p className="error">{errors.username.message}</p>} */}
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input onInput={handleChange} type="email" name="email" placeholder="Email" />
                    {/* {errors.email && <p className="error">{errors.email.message}</p>} */}
                  </div>
                  <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input onInput={handleChange} type="password" name="password" placeholder="Password" />
                    {/* {errors.password && <p className="error">{errors.password.message}</p>} */}
                  </div>
                  <div className="form-field">
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input onInput={handleChange} type="password" name="password_confirmation" placeholder="Password Confirmation" />
                    {/* {errors.password_confirmation && <p className="error">{errors.password_confirmation.message}</p>} */}
                  </div>
                  <div className="form-field">
                    <ImageUpload
                      value={formData.profile_image}
                      name='profile_image'
                      handleImageUrl={handleImageUrl} 
                    />
                  </div>
                  <button className="btn btn-yellow w-100">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </>
  )
}

export default Register