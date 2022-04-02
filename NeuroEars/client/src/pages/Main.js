import React from 'react';
import LandingImage from '../images/landingimage.jpg';
import { Link, Route, Switch } from 'react-router-dom';
import '../Main.css';

function MainPage() {
  return (
    <>
      <div
        className="container"
        style={{ backgroundImage: `url(${LandingImage})` }}
      >
        <div className="header">
          <Link to="/mainpage">
            <h1>NeuroEars</h1>
          </Link>
          <div className="nav">
            <ul>
              <li>
                <p>About us</p>
              </li>
              <li>
                <p>Solutions</p>
              </li>
              <li>
                <p>Download</p>
              </li>
              <li>
                <p>Contact us</p>
              </li>
              <li>
                <Link to="mypage">
                  <p>My Page</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mainIntro">
          <h2>We serve the best rehabilitation experiences</h2>
          <p>
            You can fix your dizziness, and can get free from vertigo.
            <br />
            Join with us to gain again the comfort dizziness free life agian.
          </p>
          <button className="getStarted">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default MainPage;
