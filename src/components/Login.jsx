import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./register.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }))
        //console.log(user);
    }
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <Link to="/register">
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
                    <h1>Log in</h1>
                    <input
                        type="email"
                        placeholder="Email or phone number"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="loginButton" onClick={handleSubmit}>
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
