// import {expect, jest, test} from '@jest';
import fromJS from './0-fromjs';
import Map from './1-map'

test('getImmutableObject fromJS function', () => {
  const test = fromJS({
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
  });
  expect(test).toHaveReturned();
});

test('getImmutableObject Map function', () => {
  const test = Map({
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
  });
  expect(test).toHaveReturned();
});
;
