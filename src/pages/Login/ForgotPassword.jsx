import React, { useState } from 'react'
import style from './style.css'
import { Link, useNavigate } from 'react-router-dom'
import ForgotPasswordImage from '../../media/images/man-trying-to-remember-password.jpg'
import { Loader } from '../../components/Loader';
function ForgotPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const handleSend = () => {
    setLoading(true)
    // navigate("/product/add")
  }
  return (
    <div className='login-container vh-100 row g-0 align-items-center justify-content-around'>
      <div className="login-image-container col-6">
        <img src={ForgotPasswordImage} alt="" />
      </div>
      <div className="col-6 row g-0 align-item-center justify-content-center">
        <div className="col-8 me-3 row g-0 login-child-container rounded-3 py-3 px-4 ">
          <div className="col-12 login-heading">
            Forgot Password
          </div>
          <div className="col-12 row g-0 justify-content-center mt-4">
            <div className="col-11 mt-3">
              An email with instructions to reset your password will be send to your email
            </div>
            <div className="col-8 form-floating mt-4">
              <input type="email" className="form-control" id="login-email" placeholder='email' />
              <label htmlFor="login-email">Email</label>
            </div>
          </div>
          <div className="col-12 row g-0 justify-content-center mt-4 mb-4">
            <button type='submit' className='login-btn py-2 px-4 rounded-2 col-8 row g-0 align-items-center justify-content-center' onClick={() => { handleSend() }}>
              {
                loading ? <Loader color={"#fff"}/> : "Send"
              }

            </button>
          </div>
          <div className='text-center mt-2'>
            <Link to="/login">Go Back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword