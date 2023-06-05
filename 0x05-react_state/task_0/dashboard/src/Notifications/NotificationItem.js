import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function NotificationItem(props) {
  const { type, value, html, markAsRead, id } = props;
  return html ? (
    <li
      className={css(styles.li)}
      style={{
        color: type === 'urgent' ? 'red' : '#220c67',
        cursor: 'pointer',
      }}
      data-priority={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    ></li>
  ) : (
    <li
      className={css(styles.li)}
      style={{
        color: type === 'urgent' ? 'red' : '#220c67',
        cursor: 'pointer',
      }}
      data-priority={type}
      onClick={() => markAsRead(id)}
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
