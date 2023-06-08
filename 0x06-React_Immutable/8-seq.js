import { Seq } from 'immutable';

export default function printBestStudents(obj) {
  const capFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const filtered = Seq(obj).filter((student) => {
    if (student.score > 70) {
      student.firstName = capFirstLetter(student.firstName);
      student.lastName = capFirstLetter(student.lastName);
      return student;
    }
  });

  console.log(filtered.toJS());
}
