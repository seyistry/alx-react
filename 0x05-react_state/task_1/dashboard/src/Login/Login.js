import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login(props) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLoginSubmit = () => {
    // setIsLoggedIn(true);
    props.logIn(email, password);
  };
  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(() => e.target.value);
  };
  const handleChangePassword = (e) => {
    e.preventDefault();
    setPassword(() => e.target.value);
  };
  return (
    <form className={css(styles.large)} onSubmit={handleLoginSubmit} typeof="POST">
      <label className={css(styles.large)} htmlFor="email">
        Email
      </label>
      <input type="email" id="email" name="email" onChange={handleChangeEmail} />
      <label className={css(styles.large)} htmlFor="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChangePassword}
      />
      <input
        type="submit"
        className={css(styles.large, styles.btn)}
        disabled={!(email.length > 0 && password.length > 0)}
        value="ok"
      />
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
