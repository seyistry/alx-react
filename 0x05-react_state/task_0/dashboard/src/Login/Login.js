import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.large)}>
      <label className={css(styles.large)} htmlFor="email">
        Email
      </label>
      <input type="text" id="email" name="email" />
      <label className={css(styles.large)} htmlFor="password">
        Password
      </label>
      <input type="password" id="password" name="password" />
      <button className={css(styles.large, styles.btn)}>ok</button>
    </div>
  );
}

const styles = StyleSheet.create({
  large: {
    '@media (max-width: 900px)': {
      display: 'block',
    },
  },

  btn: {
    paddingLeft: "10px",
    paddingRight: "10px",
    ":hover": {
      border: "4px solid #F0BF77"
    }
  }
});

export default Login;
