import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';

function CourseList() {
  return (
    <table>
      <thead>
        <th colSpan={3} style={{ textAlign: 'center' }}>
          Available courses
        </th>
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

export default CourseList;
