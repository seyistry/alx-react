import React, { useContext } from 'react';
import { getFooterCopy, getFullYear } from '../utils';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

function Footer() {
  const user = useContext(AppContext);
  return (
    <div className={css(style.appFooter)}>
      {user[0].isLoggedIn ? <p style={{ margin: "10px 0 0 0" }}>Contact us</p> : null}
      <p style={{ margin: "10px 0 0 0" }}>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </div>
  );
}

const style = StyleSheet.create({
  appFooter: {
    display: 'flex',
    flexDirection: 'column',
    // height: '100px',
    justifyContent: 'flex-end',
    textAlign: 'center',
    bottom: 0,
    // paddingBottom: '20px',
    fontStyle: 'italic',
    left: 0,
    right: 0,
    ':before': {
      content: "'\\ '",
      overflow: 'hidden',
      display: 'block',
      border: '2px solid #df354b',
      // marginBottom: '20px',
    },
  },
});
export default Footer;
