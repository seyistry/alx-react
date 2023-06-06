import logo from '../logo.jpg';
import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

function Header() {
  const user = useContext(AppContext);
  return (
    <div>
      <img src={logo} alt="logo" className={css(styles.img)} />
      <div className={css(styles.appHeader)}>School dashboard</div>
      {user[0].isLoggedIn ? (
        <>
          <hr />
          <section id="logoutSection">
            Welcome {user[0].email}{' '}
            <span style={{ cursor: 'pointer' }} onClick={() => user[1]()}>
              logout
            </span>
          </section>
        </>
      ) : null}
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
