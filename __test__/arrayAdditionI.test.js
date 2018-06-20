const ArrayAdditionI = require('../arrayAdditionI');

const test_case_1 = [3, 5, 8, 16]
const test_case_2 = [5, 7, 16, 1, 2]
const test_case_3 = [1, 2, 3, 4]

test('it should return true', () => {
    expect(ArrayAdditionI(test_case_1)).toBe(true)
})

test('it should return false', () => {
    expect(ArrayAdditionI(test_case_2)).toBe(false)
})

test('it should return false', () => {
    expect(ArrayAdditionI(test_case_3)).toBe(false)
})

