import logo from '../logo.jpg';
import React from 'react';
import './Header.css'

function Header() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <div className="App-header">School dashboard</div>
    </div>
  );
}

export default Header;
