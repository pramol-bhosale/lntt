import React, { useState } from 'react'
import style from './style.css'
import { Link, useNavigate } from 'react-router-dom'
import LoginImage from '../../media/images/shop-login.jpg'
import { Loader } from '../../components/Loader';
function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const handleLogin=()=>{
        setLoading(true);
        // navigate("/product/add")
    }
  return (
    <div className='login-container vh-100 row g-0 align-items-center justify-content-around'>
             <div className="login-image-container col-6">
                <img src={LoginImage} alt="" />
             </div>
           <div className="col-6 row g-0 align-item-center justify-content-center">
           <div className="col-8 row g-0 login-child-container rounded-3 py-2 px-4 ">
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
                <div className="col-12 row g-0 justify-content-center mt-4 mb-4 align-items-center">
                    <button type='submit' className='login-btn py-2 px-4 rounded-2 col-8 row g-0 align-items-center justify-content-center' onClick={()=>{handleLogin()}}>
                      {
                        loading ? <Loader color={"#fff"}/> : "Login"
                      }

                    </button>
                </div>
                <div className="col-12 text-center mb-4">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </div>
           </div>
    </div>
  )
}

export default Login