import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import Notifications from './Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from './CourseList/CourseList';

function App() {
  const isLoggedIn = true;
  return (
    <React.Fragment>
      <div className="App">
        <Notifications />
      </div>
      <Header />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        {isLoggedIn ? <CourseList /> : <Login />}
      </div>
      <Footer />
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
