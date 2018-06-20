const NumberSearch = require('../soal/numberSearch');

const test_case_1 = "H3ello9-9"
const test_case_2 = "Hello6 9World 2, Nic8e D7ay!"
const test_case_3 = "One Number*1*"
const test_case_4 = "Two Houses"

test('it should return 4', () => {
  expect(NumberSearch(test_case_1)).toEqual(4)
})

test('it should return 2', () => {
  expect(NumberSearch(test_case_2)).toEqual(2)
})

test('it should return 0', () => {
  expect(NumberSearch(test_case_3)).toEqual(0)
})

test('it should return 0', () => {
  expect(NumberSearch(test_case_4)).toEqual(0)
})
