import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./register.css";
import axios from "../axios";
const Register = () => {
  const history = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", {
        email: emailRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
      history("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="login">
      <div className="top">
        <Link to="/login">
          <button className="buttonLogin">Log in</button>
        </Link>
        <div className="wrapper">
          <Link to="/">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </Link>

        </div>
      </div>
      <div className="container">
        <form>
          <h1>Register</h1>
          <input
            ref={emailRef}
            type="email"
            placeholder="Email or phone number"
          />
          <input
            ref={usernameRef}
            type="username"
            placeholder="Username"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
          <button className="loginButton" onClick={handleSubmit}>
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
