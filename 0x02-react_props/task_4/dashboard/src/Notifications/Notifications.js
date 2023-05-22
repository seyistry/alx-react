import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils';
import close from '../close-icon.png';
import NotificationItem from './NotificationItem';

function Notifications(props) {
  const displayDrawer = true;
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer ? (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={getLatestNotification()}
            ></NotificationItem>
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
