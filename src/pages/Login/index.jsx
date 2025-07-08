import React, { useEffect, useState } from "react";
import style from "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { loginRequest } from "../../state/action/LoginAction";
function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    response: false,
  });
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loginReducer.isLoading);
  const fetchedData = useSelector((state) => state.loginReducer);
  const handleLogin = () => {
    setLoading(true);
    dispatch(loginRequest({ email, password }));
  };
  useEffect(() => {
    if (fetchedData?.token) {
      window.location.href = "/schedules/view";
    }
  }, [fetchedData]);
  return (
    <div className="login-container vh-100 row g-0 align-items-center justify-content-around">
      <div className="col-6 row g-0 align-item-center justify-content-center">
        <div className="col-8 row g-0 login-child-container rounded-3 py-2 px-4 ">
          <div className="col-12 login-heading">Login</div>
          <div className="col-12 row g-0 justify-content-center mt-4">
            <div className="col-8 form-floating mt-3">
              <input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={`form-control ${
                  errors.email ? "error-login-border" : null
                }`}
                id="login-email"
                placeholder="email"
              />
              <label htmlFor="login-email">Email</label>
              {errors.email ? (
                <div className="error-msg-container">{errors.email}</div>
              ) : null}
            </div>
            <div className="col-8 form-floating mt-3">
              <input
                type="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className={`form-control ${
                  errors.password ? "error-login-border" : null
                }`}
                id="login-password"
                placeholder="Password"
              />
              <label htmlFor="login-password">Password</label>
              {errors.password ? (
                <div className="error-msg-container">{errors.password}</div>
              ) : null}
            </div>
          </div>
          <div className="col-12 row g-0 justify-content-center mt-4 mb-4 align-items-center">
            <button
              type="submit"
              className="login-btn py-2 px-4 rounded-2 col-8 row g-0 align-items-center justify-content-center"
              onClick={() => {
                handleLogin();
              }}
            >
              {isLoading ? <Loader color={"#fff"} /> : "Login"}
            </button>
          </div>
          {/* <div className="col-12 text-center mb-4">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
