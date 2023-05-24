import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import Notifications from './Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from './CourseList/CourseList';
import { getLatestNotification } from './utils';

function App() {
  const isLoggedIn = true;
  const listCourses = [
    [1, 'ES6', 60],
    [2, 'Webpack', 20],
    [3, 'React', 40],
  ];

  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: getLatestNotification() },
  ];

  return (
    <React.Fragment>
      <div className="App">
        <Notifications listNotifications={listNotifications} />
      </div>
      <Header />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
      </div>
      <Footer />
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
