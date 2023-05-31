import React from 'react';
import close from '../close-icon.png';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

function Notifications(props) {
  const displayDrawer = true;

  const markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  return (
    <>
      <div className={css(styles.menuItem)}>Your notifications</div>
      {displayDrawer ? (
        <div className={css(styles.Notifications)}>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItemShape {...props} markAsRead={markAsRead} />
          </ul>
          <button
            className={css(styles.btn)}
            aria-label="Close"
            onClick={() => {
              console.log('Close button has been clicked');
            }}
          >
            <img
              src={close}
              alt="close"
              style={{ height: '20px', width: '20px' }}
            />
          </button>
        </div>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    position: 'absolute',
    padding: '5px 0',
    right: '20px',
  },

  btn: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
  },

  Notifications: {
    position: 'absolute',
    border: '1px dotted #df354b',
    padding: '10px',
    top: '30px',
    right: '20px',
  },
});

export default Notifications;
