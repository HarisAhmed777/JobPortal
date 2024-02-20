import React, { useContext, useEffect, useRef, useState } from "react";
import './login.css';
import axios from 'axios';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Context } from "../../../index.js";

function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState('');
  const { isAuthorized, setIsAuthorized,setUser } = useContext(Context);

    function handleLogin(event) {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (email === "") {
            setError("Username can't be empty");
        } else if (password === "") {
            setError("Password can't be empty");
        } else {
            const key = {
                email: email,
                password: password
            };

            axios.post("http://localhost:5000/login", key)
                .then((res) => {
                    if (res.data.message === 'success') {
                        const username = res.data.username;
                        setIsAuthorized(true);
                        setUser(username); 
                        console.log(username);

                       // Redirect to username route
                    } else {
                        setError("Invalid credentials");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    setError("Server error");
                });
        }
    }
    if(isAuthorized){
        return <Navigate to={'/'}/>
    }

    return (
        <div className="main">
            <div className="bg-dark side">
                <h2 className="text-white">Login </h2><br />
                <form onSubmit={handleLogin}>
                    <input type="text" ref={emailRef} placeholder="Enter your email" /><br /><br />
                    <input type="password" ref={passwordRef} placeholder="Enter your password" /><br /><br />
                    <button className="btn btnn text-center">Login</button><br /><br />
                </form>
                <div className="d-flex">
                    <p className="text-white ms-2">New to Jobie</p>
                    <Link to='/register'>Sign up</Link>
                </div>
                {error && <p className="text-danger">{error}</p>}
            </div>
        </div>
    );
}
export default Login;