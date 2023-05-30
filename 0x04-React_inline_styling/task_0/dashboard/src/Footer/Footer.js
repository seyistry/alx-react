import React from 'react';
import { getFooterCopy, getFullYear } from '../utils';
import './Footer.css';

function Footer() {
  return (
    <div className="App-footer">
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </div>
  );
}

export default Footer;
