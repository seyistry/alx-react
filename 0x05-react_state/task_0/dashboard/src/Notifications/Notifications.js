import React from 'react';
import close from '../close-icon.png';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

function Notifications(props) {
  // const displayDrawer = true;

  const markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  return (
    <>
      <div
        className={css(styles.menuItem)}
        onClick={() => props.handleDisplayDrawer()}
      >
        Your notifications
      </div>
      {props.displayDrawer ? (
        <div className={css(styles.Notifications)}>
          <p>Here is the list of notifications</p>
          <ul className={css(styles.ul)}>
            <NotificationItemShape {...props} markAsRead={markAsRead} />
          </ul>
          <button
            className={css(styles.btn)}
            aria-label="Close"
            onClick={() => {
              console.log('Close button has been clicked');
              props.handleHideDrawer();
            }}
            style={{ height: '20px', width: '20px', backgroundColor: '#EEE' }}
          >
            <img
              src={close}
              alt="close"
              style={{
                position: 'absolute',
                height: '15px',
                width: '15px',
                top: 2,
                right: -5,
              }}
            />
          </button>
        </div>
      ) : null}
    </>
  );
}

const translateKeyframes = {
  '0%': {
    transform: 'translateY(0)',
  },

  '20%': {
    transform: 'translateY(-5px)',
  },

  '40%': {
    transform: 'translateY(5)',
  },

  '60%': {
    transform: 'translateY(-5px)',
  },

  '80%': {
    transform: 'translateY(5)',
  },

  '100%': {
    transform: 'translateY(0)',
  },
};

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const styles = StyleSheet.create({
  menuItem: {
    position: 'absolute',
    padding: '5px 0',
    right: '20px',
    animationName: [translateKeyframes, opacityKeyframes],
    animationDuration: '.5s, .5s',
    animationIterationCount: 'infinite',
    cursor: "pointer",
  },

  btn: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    // background: 'none',
    border: 'none',
  },

  Notifications: {
    position: 'absolute',
    border: '1px dotted #df354b',
    padding: '10px',
    top: '30px',
    backgroundColor: 'white',
    right: '20px',
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',

      fontSize: '20px',
      padding: '0px',
      top: '0px',
      right: '0px',
    },
  },

  ul: {
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
});

export default Notifications;
