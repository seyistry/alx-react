import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

function NotificationItemShape({listNotifications = {}}) {
  return listNotifications.length === 0 ? (
    <div>No new notification for now</div>
  ) : (
    Object.keys(listNotifications).map((item, index) => (
      <NotificationItem {...listNotifications[item]} key={index} />
    ))
  );;
}

NotificationItemShape.propTypes = {
  listNotifications: PropTypes.shape({
    id: PropTypes.number.isRequired,
    html: PropTypes.objectOf(PropTypes.string),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
  }),
};

export default NotificationItemShape;
