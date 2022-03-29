import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthentication } from "context";
import { signupSubmissionHandler } from "services";

const Signup = () => {
    const { authDispatch } = useAuthentication()
    const initialSignupData = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
    const navigate=useNavigate();
    const [signupData, setSignupData] = useState(initialSignupData)
    const signupDataHandler = (e) => {
        const { name, value } = e.target;
        setSignupData(prevSignupData => ({ ...prevSignupData, [name]: value }))
    }
    
    return (
        <section className="main-content-container gentle-flex flex-center">
            <div className="auth-form-container p-4 flex-column">
                <div className="auth-heading pt-2 px-2 fw-700 text-center error-color">
                    <h3>SIGN UP</h3>
                </div>
                <div className="auth-content pt-2 px-2">
                    <form className="gentle-form-group gentle-flex-gap" onSubmit={(e)=>signupSubmissionHandler(e,signupData,authDispatch,navigate)}>
                        <div className="gentle-input-group">
                            <label className="gentle-input-label">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                onChange={signupDataHandler}
                                className="gentle-input"
                                placeholder="Faisal"
                                required
                            />
                        </div>
                        <div className="gentle-input-group">
                            <label className="gentle-input-label">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                onChange={signupDataHandler}
                                className="gentle-input"
                                placeholder="Khan"
                                required
                            />
                        </div>
                        <div className="gentle-input-group">
                            <label className="gentle-input-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                onChange={signupDataHandler}
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
                                onChange={signupDataHandler}
                                className="gentle-input"
                                placeholder="Type here..."
                                required
                            />
                        </div>
                        <button className="btn btn-info btn-info-hover" type="submit">
                            SIGN UP
                        </button>
                    </form>
                    <div className="p-2 gentle-flex-gap other-options">
                        <span>Already on Note It</span>
                        <Link className="link-none text-info" to="/login">SIGN IN</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Signup }