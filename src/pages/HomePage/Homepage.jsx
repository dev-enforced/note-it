import React from 'react';
import {Link} from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
    return (
        <section className="home-page-wrapper">
            <div className="home-page-top">
                <h2>
                    <span className='home-page-title'>NOTE </span>IT
                </h2>
            </div>
            <div className="home-content-container">
                <div className="home-content">
                    <span></span>
                    <h4>NEOG NOTES</h4>
                </div>
                <div className="home-content-description">
                    <h1>An app to pen down your thoughts,ideas and goals to be more <span className='home-page-keyword'>Productive</span></h1>
                </div>
                <div className='home-page-features'>
                    <ul>
                        <li>Start Writing Your Thoughts</li>
                        <li>Edit or Delete your thoughts</li>
                        <li>Archive your thoughts</li>
                        <li>Grow and evolve with you</li>
                    </ul>
                </div>
                <Link to="/">
                    <button className="home-page-button login">LOGIN</button>
                </Link>
                <Link to="/">
                    <button className="home-page-button note">MAKE NOTES</button>
                </Link>

            </div>
        </section>
    )
}

export { Homepage }