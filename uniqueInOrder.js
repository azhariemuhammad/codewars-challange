/*

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

function uniqueInOrder(items) {
    let history = []
    for (let i = 0; i < items.length; i++) {
        if (items[i -1] !== items[i]) {
            history.push(items[i])
        }
    }
    console.log(history)
    return history
}


// other solution:

var uniqueInOrder=function(iterable){
    let result;
    result = Array.prototype.filter
        .call(iterable, function(current, index){ 
            return iterable[index - 1] !== current
        })
    console.log(result)
    return
}

uniqueInOrder('AAAABBBCCDAABBB') // == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         // == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       // == [1,2,3]
