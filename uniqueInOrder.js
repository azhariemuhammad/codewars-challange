/*

Implement the function unique_in_order which takes as argument a sequence 
and returns a list of items without any elements with the same value next to each
other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// solution
function uniqueInOrder (items) {
    let newArr = [];
    for(let i = 0; i < items.length; i++) {
        if(items[i] !== items[i + 1]) {
            newArr.push(items[i]);
        }
    }
    return newArr;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // == ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));         // == ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]));       // == [1,2,3]

uniqueInOrder('AAAABBBCCDAABBB') // == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         // == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       // == [1,2,3]
