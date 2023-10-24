import React from 'react'
import style from './style.css'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate();
    const handleLogin=()=>{
        navigate("/product/add")
    }
  return (
    <div className='login-container vh-100 row g-0 align-items-center justify-content-end'>
            <div className="col-4 me-3 row g-0 login-child-container rounded-3 py-2 px-4 ">
                <div className="col-12 login-heading">
                    Login
                </div>
                <div className="col-12 row g-0 justify-content-center mt-4">
                <div className="col-8 form-floating mt-3">
                      <input type="text" className="form-control"  id="login-username" placeholder='Username'/>
                      <label htmlFor="login-username">Username</label>
                </div>
                <div className="col-8 form-floating mt-3">
                      <input type="Password" className="form-control"  id="login-password" placeholder='Password'/>
                      <label htmlFor="login-password">Password</label>
                </div>
                </div>
                <div className="col-12 row g-0 justify-content-center mt-4 mb-4">
                    <button type='submit' className='login-btn py-2 px-4 rounded-2 col-8' onClick={()=>{handleLogin()}}>Login</button>
                </div>
                <div className="col-12 text-center mb-4">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </div>
    </div>
  )
}

export default Login