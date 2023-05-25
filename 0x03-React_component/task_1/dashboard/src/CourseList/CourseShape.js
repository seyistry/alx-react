import React from 'react';
import PropTypes from 'prop-types';

function CourseShape({ listCourses = {} }) {
  return listCourses.length === 0 ? (
    <div>No course available yet</div>
  ) : (
    Object.keys(listCourses).map((key, index) => <li key={index}>`${key} ${listCourses}`</li>)
  );
}

CourseShape.propTypes = {
  listCourses: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
  }),
};

export default CourseShape;
