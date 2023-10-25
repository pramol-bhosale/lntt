import React from 'react'
import style from './style.css'
import { Link, useNavigate } from 'react-router-dom'
function ForgotPassword() {
    const navigate = useNavigate();
    const handleSend=()=>{
        navigate("/product/add")
    }
  return (
    <div className='login-container vh-100 row g-0 align-items-center justify-content-end'>
            <div className="col-4 me-3 row g-0 login-child-container rounded-3 py-3 px-4 ">
                <div className="col-12 login-heading">
                    Forgot Password
                </div>
                <div className="col-12 row g-0 justify-content-center mt-4">
                <div className="col-8 mt-3">
                     An email with instructions to reset your password will be send to your email
                </div>
                <div className="col-8 form-floating mt-3">
                      <input type="email" className="form-control"  id="login-email" placeholder='email'/>
                      <label htmlFor="login-email">Email</label>
                </div>
                </div>
                <div className="col-12 row g-0 justify-content-center mt-4 mb-4">
                    <button type='submit' className='login-btn py-2 px-4 rounded-2 col-8' onClick={()=>{handleSend()}}>Send</button>
                </div>
            </div>
    </div>
  )
}

export default ForgotPassword