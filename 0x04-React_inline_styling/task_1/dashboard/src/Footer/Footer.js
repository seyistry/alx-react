import React from 'react';
import { getFooterCopy, getFullYear } from '../utils';
import { StyleSheet, css } from 'aphrodite';

function Footer() {
  return (
    <div className={css(style.appFooter)}>
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </div>
  );
}

const style = StyleSheet.create({
  appFooter: {
    position: 'fixed',
    textAlign: 'center',
    bottom: 0,
    paddingBottom: '20px',
    fontStyle: 'italic',
    left: 0,
    right: 0,
    ':before': {
      content: "'\\ '",
      overflow: 'hidden',
      display: 'block',
      border: '2px solid #df354b',
      width: '100vw',
      marginBottom: '20px',
    },
  },
});
export default Footer;
