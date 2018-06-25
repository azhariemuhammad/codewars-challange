const xo = require('../soal/XandO');

const test_case_1 = 'xoxoxo'
const test_case_2 = 'oxooxo'
const test_case_3 = 'oxo'
const test_case_4 = 'xxxooo'
const test_case_5 = 'xoxooxxO'

test('it should return true', () => {
    expect(xo(test_case_1)).toBe(true)
})

test('it should return false', () => {
    expect(xo(test_case_2)).toBe(false)
})

test('it should return false', () => {
    expect(xo(test_case_3)).toBe(false)
})

test('it should return true', () => {
  expect(xo(test_case_4)).toBe(true)
})

test('it should return true', () => {
  expect(xo(test_case_5)).toBe(true)
})
