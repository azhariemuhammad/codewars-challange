const konversiMenit = require('../soal/konversiMenit');

const test_case_1 = 63
const test_case_2 = 124
const test_case_3 = 53
const test_case_4 = 88
const test_case_5 = 120

test('it should return string 1:03', () => {
  expect(konversiMenit(test_case_1)).toEqual('1:03')
})

test('it should return string 2:04', () => {
  expect(konversiMenit(test_case_2)).toEqual('2:04')
})

test('it should return string 0:53', () => {
  expect(konversiMenit(test_case_3)).toEqual('0:53')
})

test('it should return string 1:28', () => {
  expect(konversiMenit(test_case_4)).toEqual('1:28')
})

test('it should return string 2:00', () => {
  expect(konversiMenit(test_case_5)).toEqual('2:00')
})