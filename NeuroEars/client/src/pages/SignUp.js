import React, { useState } from 'react';
import LandingImage from '../images/landingimage.jpg';
// import landingVideo from "../videos/BrainNeurons.mp4";
// import phoneLanding from "../videos/BrainNeurons.gif";
import { Link, Route, Switch } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function registerUser(event) {
    event.preventDefault();
    const resopnse = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        password,
        name,
        email,
      }),
    });
    const data = await resopnse.json();
    console.log(data);
  }

  return (
    <>
      <div
        className="landing-box"
        style={{ backgroundImage: `url(${LandingImage})` }}
      >
        {/* <img src={LandingImage} alt={LandingImage} /> */}
        <form onSubmit={registerUser}>
          <div className="login-info">
            <h1>LOGO</h1>
            <div className="input-area">
              <input
                value={id}
                onChange={(e) => setId(e.target.value)}
                type="text"
                name="id"
                id="id"
                autoComplete="off"
                required
              ></input>
              <label for="id">User Name(ID)</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="pw"
                id="pw"
                autoComplete="off"
                required
              ></input>
              <label for="pw">Password</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="id"
                id="name"
                autoComplete="off"
                required
              ></input>
              <label for="name">Name</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
      </div>
    </>
  );
}

export default SignUp;
