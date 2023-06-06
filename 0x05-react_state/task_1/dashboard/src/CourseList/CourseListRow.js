import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow(props) {
  const { isHeader, textFirstCell, textSecondCell } = props;
  const [checked, setChecked] = useState(false);
  function handleChange(e) {
    e.preventDefault();
    // console.log(checked);
    setChecked(() => !checked);
  }
  return (
    <tr>
      {isHeader ? (
        <>
          <th colSpan={1.5} className={css(style.th)}>
            {textFirstCell}
          </th>
          <th colSpan={1.5} className={css(style.th)}>
            {textSecondCell}
          </th>
        </>
      ) : (
        <>
          <td
            style={{
              backgroundColor: checked ? '#e6e4e4' : '#f5f5f5',
            }}
          >
            <input type="checkbox" onChange={handleChange} />
            {textFirstCell}
          </td>
          <td
            style={{
              backgroundColor: checked ? '#e6e4e4' : '#f5f5f5',
            }}
          >
            {textSecondCell}
          </td>
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
    backgroundColor: '#f5f5f5',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

export default CourseListRow;
