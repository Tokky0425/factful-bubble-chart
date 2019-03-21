import {getDivisionNum} from './axisFunction';

test('get appropriate division numbers', () => {
  expect(getDivisionNum(0, 100, 10)).toBe(11);
  expect(getDivisionNum(20, 90, 10)).toBe(8);
});
