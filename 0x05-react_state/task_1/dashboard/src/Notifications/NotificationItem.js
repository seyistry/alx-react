import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function NotificationItem(props) {
  const { type, value, html, markNotificationAsRead, id } = props;
  return html ? (
    <li
      className={css(styles.li)}
      style={{
        color: type === 'urgent' ? 'red' : '#220c67',
        cursor: 'pointer',
      }}
      data-priority={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markNotificationAsRead(id)}
    ></li>
  ) : (
    <li
      className={css(styles.li)}
      style={{
        color: type === 'urgent' ? 'red' : '#220c67',
        cursor: 'pointer',
      }}
      data-priority={type}
      onClick={() => markNotificationAsRead(id)}
    >
      {value}
    </li>
  );
}

const styles = StyleSheet.create({
  li: {
    '@media (max-width: 900px)': {
      padding: '10px 8px',
      borderBottom: '1px solid black',
    },
  },
});

NotificationItem.propTypes = {
  html: PropTypes.objectOf(PropTypes.string),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default NotificationItem;
