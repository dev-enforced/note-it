import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <section className="main-content-container gentle-flex flex-center">
            <div className="auth-form-container p-4 flex-column">
                <div className="auth-heading pt-2 px-2 fw-700 text-center error-color">
                    <h3>SIGN UP</h3>
                </div>
                <div className="auth-content pt-2 px-2">
                    <form className="gentle-form-group gentle-flex-gap">
                        <div className="gentle-input-group">
                            <label className="gentle-input-label">First Name</label>
                            <input
                                type="text"
                                className="gentle-input"
                                placeholder="Faisal"
                            />
                        </div>
                        <div className="gentle-input-group">
                            <label className="gentle-input-label">Last Name</label>
                            <input
                                type="text"
                                className="gentle-input"
                                placeholder="Khan"
                            />
                        </div>
                        <div className="gentle-input-group">
                            <label className="gentle-input-label">Email</label>
                            <input
                                type="email"
                                className="gentle-input"
                                placeholder="faisalkhan@yahoo.com"
                            />
                        </div>
                        <div className="gentle-input-group">
                            <label className="gentle-input-label">Password</label>
                            <input
                                type="password"
                                className="gentle-input"
                                placeholder="Type here..."
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