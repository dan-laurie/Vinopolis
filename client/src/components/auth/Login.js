import React, { useState } from 'react' 
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Slide from 'react-reveal/Slide'
import { Helmet } from 'react-helmet'

const Login = () => {

  const history = useHistory() 

  const [ errors, setErrors ] = useState({
    email: '',
    password: '',
  })
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token) 
    history.push('/') 
  }

  const handleSubmit = async (event) => {
    event.preventDefault() 
    try {
      const { data } = await axios.post('/api/auth/login/', formData)
      setTokenToLocalStorage(data.token) 
    } catch (err) {
      console.log(err)
      setErrors(err)
    }
  }
  return (
    <>
      <Helmet>
        <title>Vinopolis | Login </title>
      </Helmet>
      <div className="login-page">         
        <Slide left>
          <div className="reg-info">
            <p className="login-text">If you already have an account, please log in using the form below!</p>
          </div>
        </Slide>

        <Slide right>
          <div className="form-page">
            <div className="container">
              <div className="row">
                <form onSubmit={handleSubmit} className="col-10 offset-1 mt-4 col-md-6 offset-md-3">
                  <h3>Login</h3>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} type="email" name="email" placeholder="Email" />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} type="password" name="password" placeholder="Password" />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                  </div>
                  <button className="btn btn-yellow w-100">Login</button>
                  <p className="no-account">Don&apos;t have an Account? <Link to="/register"><span>Click Here</span></Link></p>
                </form>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </>
  )
}

export default Login