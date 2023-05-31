import React from 'react';
// import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import Notifications from './Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from './CourseList/CourseList';
import BodySectionWithMarginBottom from './BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from './utils';
import BodySection from './BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';

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
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ];

  return (
    <React.Fragment>
      <div className="App">
        <Notifications listNotifications={listNotifications} />
      </div>
      <Header />
      <div className={css(styles.appBody)}>
        <p className={css(styles.pTag)}>Login to access the full dashboard</p>
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">Hello News</BodySection>
      </div>
      <Footer />
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

const styles = StyleSheet.create({
  appBody: {
    ':before': {
      content: "'\\ '",
      display: 'block',
      borderBottom: '4px solid #df354b',
      left: 0,
      right: 0,
    },
  },
  pTag: {
    margin: "0px",
    padding: '20px 0 0 40px',
  },
});

export default App;
