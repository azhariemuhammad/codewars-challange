const tentukanDeretAritmetika = require('../soal/deretAritmetika');

const test_case_1 = [1, 2, 3, 4, 5, 6]
const test_case_2 = [2, 4, 6, 12, 24]
const test_case_3 = [2, 4, 6, 8]
const test_case_4 = [2, 6, 18, 54]
const test_case_5 = [1, 2, 3, 4, 7, 9]

test('it should return true', () => {
    expect(tentukanDeretAritmetika(test_case_1)).toBe(true)
})

test('it should return false', () => {
    expect(tentukanDeretAritmetika(test_case_2)).toBe(false)
})

test('it should return true', () => {
    expect(tentukanDeretAritmetika(test_case_3)).toBe(true)
})

test('it should return false', () => {
  expect(tentukanDeretAritmetika(test_case_4)).toBe(false)
})

test('it should return false', () => {
  expect(tentukanDeretAritmetika(test_case_5)).toBe(false)
})
