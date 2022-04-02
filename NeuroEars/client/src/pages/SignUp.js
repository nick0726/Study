import React, { useState } from 'react';
import LandingImage from '../images/landingimage.jpg';
// import landingVideo from "../videos/BrainNeurons.mp4";
// import phoneLanding from "../videos/BrainNeurons.gif";
import { Link, Route, Switch } from 'react-router-dom';

const SignUp = ({ SignUp, SignUpOn }) => {
  return (
    <>
      <div
        className="landing-box"
        style={{ backgroundImage: `url(${LandingImage})` }}
      >
        {/* <img src={LandingImage} alt={LandingImage} /> */}
        <form action="">
          <div className="login-info">
            <h1>LOGO</h1>
            <div className="input-area">
              <input
                type="text"
                name="id"
                id="id"
                autoComplete="off"
                required
              ></input>
              <label for="id">User Name(ID)</label>
              <input
                type="password"
                name="pw"
                id="pw"
                autoComplete="off"
                required
              ></input>
              <label for="pw">Password</label>
              <input
                type="text"
                name="id"
                id="name"
                autoComplete="off"
                required
              ></input>
              <label for="name">Name</label>
              <input
                type="text"
                name="pw"
                id="email"
                autoComplete="off"
                required
              ></input>
              <label for="pw">E-mail</label>
            </div>
            <div className="signUpButtonBox">
              <Link to="/">
                <div className="cancel">
                  <button className="cancelBtn">Cancel</button>
                </div>
              </Link>
              <div className="createAC">
                <button className="createAcBtn">Create Account</button>
              </div>
            </div>
          </div>
        </form>

        {/* <video
          id='landing-video'
          autoPlay='autoplay'
          loop='Loop'
          volume='0.2'
          muted='false'
        >
          <source src={landingVideo} type='video/mp4' alt={landingVideo} />
        </video> */}
        {/* <img id='pcLanding' src={LandingImage} alt={LandingImage} /> */}
        {/* <img id='phone-landing' src={phoneLanding} alt={phoneLanding}></img> */}
        {/* <img src={LandingImage} alt={LandingImage}></img> */}
      </div>
    </>
  );
};

export default SignUp;
