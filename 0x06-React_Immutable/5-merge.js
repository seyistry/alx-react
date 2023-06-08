import { List } from 'immutable';
// import { List } from './node_modules/immutable/dist/immutable';

export default function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

export function mergeElements(page1, page2) {
  return List(page1).merge(page2);
}
