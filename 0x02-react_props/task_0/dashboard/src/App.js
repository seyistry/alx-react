import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import Notifications from './Notifications';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Notifications />
      </div>
      <Header />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <Login />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
