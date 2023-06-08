import { List, Map } from 'immutable';
// import { List } from './node_modules/immutable/dist/immutable';

export default function concatElements(page1, page2) {
  const list_1 = List(page1);
  const list_2 = List(page2);
  return list_1.concat(list_2);
}

export function mergeElements(page1, page2) {
  obj_1 = Map(page1);
  obj_2 = Map(page2);
  return obj_1.merge(obj_2);
}
