import React from 'react';
import CourseListRow from './CourseListRow';
// import './CourseList.css';
import { StyleSheet, css } from 'aphrodite';

function CourseList() {
  return (
    <table className={css(style.table)}>
      <thead>
        <tr>
          <th colSpan={3} style={{ textAlign: 'center' }}>
            Available courses
          </th>
        </tr>
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        <CourseListRow
          textFirstCell="ES6"
          textSecondCell="60"
          isHeader={false}
        />
      </tbody>
      <tbody>
        <CourseListRow
          textFirstCell="Webpack"
          textSecondCell="20"
          isHeader={false}
        />
      </tbody>
      <tbody>
        <CourseListRow
          textFirstCell="React"
          textSecondCell="40"
          isHeader={false}
        />
      </tbody>
    </table>
  );
}

const style = StyleSheet.create({
  table: {
    width: '95vw',
    border: '1px solid rgb(236, 234, 234)',
    boxSizing: 'border-box',
    margin: 'none',
    // tableLayout: 'fixed',
  },
});

export default CourseList;
