import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import close from './close-icon.png';

function Notifications(props) {
  return (
    <>
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li
            data-priority="urgent"
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          ></li>
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
