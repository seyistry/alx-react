import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem(props) {
  const { type, value, html, markAsRead, id } = props;
  return html ? (
    <li
      style={{ color: type === 'urgent' ? 'red' : '#220c67' }}
      data-priority={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    ></li>
  ) : (
    <li
      style={{ color: type === 'urgent' ? 'red' : '#220c67' }}
      data-priority={type}
      onClick={() => markAsRead(id)}
    >
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  html: PropTypes.objectOf(PropTypes.string),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default NotificationItem;
