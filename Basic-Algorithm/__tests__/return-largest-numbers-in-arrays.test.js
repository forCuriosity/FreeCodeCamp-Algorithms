var largestNumsInArrays = require('../myCode/return-largest-numbers-in-arrays.js');


test('scans an array of arrays, to return each arrays largest number', () => {
  expect(largestNumsInArrays([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).toBe([5, 27, 39, 1001]);
});
