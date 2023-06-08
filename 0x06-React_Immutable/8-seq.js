import { Seq } from 'immutable';

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
}
