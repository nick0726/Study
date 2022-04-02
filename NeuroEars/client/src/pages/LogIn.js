import React from "react";
import LandingImage from "../images/landingimage.jpg";
// import landingVideo from "../videos/BrainNeurons.mp4";
// import phoneLanding from "../videos/BrainNeurons.gif";
import { Link, Route, Switch } from "react-router-dom";

function LogIn() {
  return (
    <>
      <div
        className='landing-box'
        style={{ backgroundImage: `url(${LandingImage})` }}
      >
        {/* <img src={LandingImage} alt={LandingImage} /> */}
        <form action=''>
          <div className='login-info'>
            <h1>LOGO</h1>
            <div className='input-area'>
              <input
                type='text'
                name='id'
                id='id'
                autoComplete='off'
                required
              ></input>
              <label for='id'>User Name</label>
              <input
                type='password'
                name='pw'
                id='pw'
                autoComplete='off'
                required
              ></input>
              <label for='pw'>Password</label>
            </div>
            <div className='buttonBox'>
              <div className='logIn'>
                <button className='logInBtn'>LogIn</button>
              </div>
              <p>Doesn't have an account?</p>
              <Link to='/signup'>
                <div className='signUp'>
                  <button className='signUpBtn'>SignUp</button>
                </div>
              </Link>
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
}

// function Backgroundimage(props) {
//   return (
//     <>
//       <div className='LandingImage'>
//         <img src={LandingImage} alt={LandingImage}></img>
//       </div>
//     </>
//   );
// }

export default LogIn;
