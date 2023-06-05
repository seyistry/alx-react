import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow(props) {
  const { isHeader, textFirstCell, textSecondCell } = props;
  return (
    <tr>
      {isHeader ? (
        <>
          <th colSpan={1.5} className={css(style.th)}>{textFirstCell}</th>
          <th colSpan={1.5} className={css(style.th)}>{textSecondCell}</th>
        </>
      ) : (
        <>
          <td className={css(style.td)}>{textFirstCell}</td>
          <td className={css(style.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const style = StyleSheet.create({
  th: {
    textAlign: 'left',
    borderBottom: '2px solid rgb(236, 234, 234)',
    backgroundColor: '#deb5b545',
  },
  td: {
    backgroundColor: '#f5f5f5ab',
  },
});

export default CourseListRow;
