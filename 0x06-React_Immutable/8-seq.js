//#!/usr/bin/node
import { Seq } from 'immutable';
// const { Seq, Map } = require('immutable');
// import { Seq } from './node_modules/immutable/dist/immutable';

// const grades = {
//   1: {
//     score: 99,
//     firstName: 'guillaume',
//     lastName: 'salva',
//   },
//   2: {
//     score: 50,
//     firstName: 'guillaume',
//     lastName: 'salva',
//   },
//   3: {
//     score: 69,
//     firstName: 'guillaume',
//     lastName: 'salva',
//   },
//   4: {
//     score: 77,
//     firstName: 'guillaume',
//     lastName: 'salva',
//   },
// };

export default function printBestStudents(obj) {
  Seq(obj).filter(function (key) {
    if (key.score > 70) {
      firstName = key.firstName;
      lastName = key.lastName;
      console.log(
        `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName
          .charAt(0)
          .toUpperCase()}${lastName.slice(1)}`
      );
      return key;
    }
  });
//   console.log(oddSquares.toObject());
}

// printBestStudents(grades);
