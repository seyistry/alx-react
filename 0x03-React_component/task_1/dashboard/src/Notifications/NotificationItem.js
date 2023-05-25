import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem(props) {
  const { type, value, html } = props;
  return html ? (
    <li data-priority={type} dangerouslySetInnerHTML={html}></li>
  ) : (
    <li data-priority={type}>{value}</li>
  );
}

NotificationItem.propTypes = {
  html: PropTypes.objectOf(PropTypes.string),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default NotificationItem;
