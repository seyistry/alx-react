import React from 'react';
import './Notifications.css';
import close from '../close-icon.png';
import NotificationItemShape from './NotificationItemShape';

function Notifications(props) {
  const displayDrawer = true;
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer ? (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItemShape {...props} />
          </ul>
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
            }}
            aria-label="Close"
            onClick={() => {
              console.log('Close button has been clicked');
            }}
          >
            <img src={close} alt="close" />
          </button>
        </div>
      ) : null}
    </>
  );
}

export default Notifications;
