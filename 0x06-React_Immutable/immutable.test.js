// import {expect, jest, test} from '@jest';
import fromJS from './0-fromjs';
import fromMap from './1-map';
import { Map } from 'immutable';

test('getImmutableObject fromJS function', () => {
  const test = fromJS({
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
  });
  expect(test).toBe(
    Map({
      fear: true,
      smell: -1033575916.9145899,
      wall: false,
      thing: -914767132,
    })
  );
});

test('getImmutableObject Map function', () => {
  const test = fromMap({
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
  });
  expect(test).toHaveReturned();
});
