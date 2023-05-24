import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

function NotificationItemShape({ listNotifications = [] }) {
  return listNotifications.length === 0 ? (
    <div>No new notification for now</div>
  ) : (
    listNotifications.map((item, index) => (
      <NotificationItem {...item} key={index} />
    ))
  );
}

NotificationItemShape.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      html: PropTypes.objectOf(PropTypes.string),
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
    })
  ),
};

export default NotificationItemShape;
