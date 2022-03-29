import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthentication } from "context";
import { loginSubmissionHandler } from "services";
import { initialLoginData, guestCredentials } from "constants";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuthentication();
  const [loginData, setLoginData] = useState(initialLoginData);
  const loginDataHandler = (e) => {
    const { name, value } = e.target;
    setLoginData(prevLoginData => ({ ...prevLoginData, [name]: value }))
  }

  return (
    <section className="main-content-container gentle-flex flex-center">
      <div className="auth-form-container p-4 flex-column">
        <div className="auth-heading pt-2 px-2 fw-700 text-center error-color">
          <h3>SIGN IN</h3>
        </div>
        <div className="auth-content pt-2 px-2">
          <form className="gentle-form-group gentle-flex-gap" onSubmit={(e) => loginSubmissionHandler(e, loginData)}>
            <div className="gentle-input-group">
              <label className="gentle-input-label">Email</label>
              <input
                type="email"
                name="email"
                onChange={loginDataHandler}
                className="gentle-input"
                placeholder="faisalkhan@yahoo.com"
                required
              />
            </div>
            <div className="gentle-input-group">
              <label className="gentle-input-label">Password</label>
              <input
                type="password"
                name="password"
                onChange={loginDataHandler}
                className="gentle-input"
                placeholder="Type here..."
                required
              />
            </div>
            <button className="btn btn-info btn-info-hover" type="submit">
              SIGN IN
            </button>
            <button className="btn btn-info btn-info-hover" onClick={(e) => {
              e.preventDefault();
              loginSubmissionHandler(e, guestCredentials, authDispatch, navigate)
            }}>
              SIGN IN AS GUEST
            </button>
          </form>
          <div className="p-2 gentle-flex-gap other-options">
            <span>New To Note It</span>
            <Link className="link-none text-info" to="/signup">SIGN UP</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Login }