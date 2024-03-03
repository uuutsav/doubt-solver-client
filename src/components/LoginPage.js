import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const loginImage = "https://img.freepik.com/premium-vector/blue-light-striped-background-vector-empty-space-eps10_547648-965.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709424000&semt=ais"

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here
    const details = {
      username: username,
      password: password
    }
    const response = await axios.post('http://localhost:5001/login', details);
    console.log(response.data)
    console.log('Logging in with:', details);
  };

  return (
    <div className="container">
      <div className="login__content">
        <img src="/images/bg-login.png" className="login__img"></img>

        <form onSubmit={handleLogin} className="login__form">
          <div>
            <h1 className="login__title">
              <span>Welcome</span> Back
            </h1>
            <p className="login__description">
              {/* <!-- Login desc. --> */}

            </p>
          </div>

          <div>
            <div className="login__inputs">
              <div>
                <label htmlFor="input-email" className="login__label">Email</label>
                <input required
                  type="email"
                  placeholder="Enter your email address"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="login__input" id="input-email"></input>
              </div>

              <div>
                <label htmlFor="input-pass" className="login__label">Password</label>

                <div className="login__box">
                  <input required
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login__input" id="input-pass"></input>
                  <i className="ri-eye-off-line login__eye" id="input-icon"></i>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="login__buttons">
              <button className="login__button">Log In</button>
              <button className="login__button login__button-ghost">Sign Up</button>
            </div>

            <a href="#" className="login__forgot">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>

  );
};

export default LoginPage;
