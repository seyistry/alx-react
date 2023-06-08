import { Seq } from 'immutable';

export function printBestStudents(obj) {
  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const filtered = Seq(obj).filter((item) => {
    if (item.score > 70) {
      item.firstName = capitalize(item.firstName);
      item.lastName = capitalize(item.lastName);
      return item;
    }
  });

  console.log(filtered.toJS());
}
