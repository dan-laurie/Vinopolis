import React from 'react' 
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login-page">
      <div className="reg-info">
        <p className="login-text">If you already have an account, please log in using the form below!</p>
      </div>
      <div className="form-page">
        <div className="container">
          <div className="row">
            <form className="col-10 offset-1 mt-4 col-md-6 offset-md-3">
              <h3>Login</h3>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" />
              </div>
              <button className="btn btn-yellow w-100">Login</button>
              <p className="no-account">Don&apos;t have an Account?<Link to="/register"><span> Click Here</span></Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login