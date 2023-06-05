import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);
  const handleLoginSubmit = () => setIsLoggedIn(true);
  const handleChangeEmail = (e) => {
    e.preventDefaults();
    setEmail(e.target.value());
    if (email.length > 1 && password.length > 1) {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  };
  const handleChangePassword = (e) => {
    e.preventDefaults();
    setPassword(e.target.value());
    if (email.length > 1 && password.length > 1) {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  };
  return (
    <form className={css(styles.large)}>
      <label className={css(styles.large)} htmlFor="email">
        Email
      </label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={() => handleChangeEmail}
      />
      <label className={css(styles.large)} htmlFor="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={() => handleChangePassword}
      />
      <input
        type="submit"
        className={css(styles.large, styles.btn)}
        onClick={() => handleLoginSubmit}
        disabled={!enableSubmit}
      >
        ok
      </input>
    </form>
  );
}

const styles = StyleSheet.create({
  large: {
    '@media (max-width: 900px)': {
      display: 'block',
    },
  },

  btn: {
    paddingLeft: '10px',
    paddingRight: '10px',
    ':hover': {
      border: '4px solid #F0BF77',
    },
  },
});

export default Login;
