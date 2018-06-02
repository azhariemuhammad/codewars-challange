/*

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

function uniqueInOrder(items) {
    // create array untuk menampung unique value
    let history = []

    // buat iterasi sesuai panjang argument
    for (let i = 0; i < items.length; i++) {
        // cek jika element sebelumnya tidak sama dengan elemen pada posisi pointer
        if (items[i -1] !== items[i]) {
            // push element tersebut ke array penampung
            history.push(items[i])
        }
    }
    // return array
    console.log(history)
    return history
}


uniqueInOrder('AAAABBBCCDAABBB') // == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         // == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       // == [1,2,3]
