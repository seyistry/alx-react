import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils';
import close from '../close-icon.png';
import NotificationItem from './NotificationItem';

function Notifications(props) {
  return (
    <>
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
      </div>
      <button
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
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
    </>
  );
}

export default Notifications;
