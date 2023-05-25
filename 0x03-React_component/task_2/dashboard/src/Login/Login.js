import React from 'react';
import './Login.css';

function Login() {
  return (
    <React.Fragment>
      <label htmlFor="email">
        Email
      </label>
      <input type="text" id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <button>ok</button>
    </React.Fragment>
  );
}

export default Login;
