import logo from '../logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div>
      <img src={logo} alt="logo" className={css(styles.img)} />
      <div className={css(styles.appHeader)}>School dashboard</div>
    </div>
  );
}

const styles = StyleSheet.create({
  img: {
    height: '200px',
    width: '200px',
    verticalAlign: 'middle',
  },

  appHeader: {
    color: '#df354b',
    display: 'inline',
    fontSize: '30px',
    fontWeight: 'bold',
  },
});

export default Header;
