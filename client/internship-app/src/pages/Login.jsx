import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Login.css';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

async function loginUser(credentials) {

  return fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = async e => {
    
    
      
    e.preventDefault();

    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    console.log(username,password);
    navigate("/applications");
    window.location.reload(false);
  
  }


    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="content">
                  <div className="input-field">
                    <input type="email" placeholder="Email" autoComplete="nope" onChange={e => setUserName(e.target.value)}></input>
                  </div>
                  <div className="input-field">
                    <input type="password" placeholder="Password" autoComplete="new-password" onChange={e => setPassword(e.target.value)}></input>
                  </div>
                  <a href="#" className="link">Forgot Your Password?</a>
                </div>
                
                <div className="action">
                  <button><Link to="/Register">Register</Link></button>
                  <button type="submit" >Sign In</button>  
                </div>
            </form>
        </div>
    );

}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;
