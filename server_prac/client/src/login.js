import './App.css';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:1000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'applicatoin/json',
      },
      body: JSON.stringify({
        id,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === 'ok') {
      alert('Signup Sucessful!');
    }
    return (
      <>
        <div className="landing-box">
          {/* <img src={LandingImage} alt={LandingImage} /> */}
          <form onSubmit={registerUser}>
            <div className="login-info">
              <h1>NeuroEars</h1>
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
}

export default Login;
