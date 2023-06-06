import React, { useState, useContext } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from './AppContext';

function App() {
  // const user = useContext(UserContext);
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false,
    listNotifications: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ],
  });
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const handleDisplayDrawer = () => setDisplayDrawer(true);
  const handleHideDrawer = () => setDisplayDrawer(false);
  // const isLoggedIn = false;
  function logIn(email, password) {
    setUser({ email, password, isLoggedIn: true });
  }

  function markNotificationAsRead(id) {
    // const index = user.listNotifications.indexOf(id);
    // console.log(index);
    setUser({
      ...user,
      listNotifications: user.listNotifications.filter(
        (item) => item.id !== id
      ),
    });
  }

  function logOut() {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  }

  const listCourses = [
    [1, 'ES6', 60],
    [2, 'Webpack', 20],
    [3, 'React', 40],
  ];

  return (
    <AppContext.Provider value={[user, logOut]}>
      <div className="App">
        <Notifications
          listNotifications={user.listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
          markNotificationAsRead={markNotificationAsRead}
        />
      </div>
      <Header />
      <div className={css(styles.appBody)}>
        <p className={css(styles.pTag)}>Login to access the full dashboard</p>
        {user.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login logIn={logIn} />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          facere, libero itaque inventore soluta est doloribus vel nam culpa
          voluptatibus. Repellendus, eligendi magni labore aspernatur facilis
          voluptas quibusdam doloribus cupiditate. Aperiam, aliquam! Porro,
          ipsum numquam! Maiores impedit est natus, asperiores tempore accusamus
          dignissimos error odit aperiam laboriosam, unde nisi expedita adipisci
          id necessitatibus beatae fugit velit aliquam voluptatibus corrupti
          sunt. Labore vitae deleniti voluptatum incidunt ratione sunt dolorum
          laborum.
        </BodySection>
      </div>
      <Footer />
    </AppContext.Provider>
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
    margin: '0px',
    padding: '20px 0 0 40px',
  },
});

export default App;
