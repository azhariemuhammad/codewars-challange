// Find the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples
// divisors 4  = 3 -- 1, 2, 4
// divisors 5  = 2 -- 1, 5
// divisors 12 = 6 -- 1, 2, 3, 4, 6, 12
// divisors 30 = 8 -- 1, 2, 3, 5, 6, 10, 15, 30

function getDivisorCnt(num) {
    // buat counter dan var penampung
    let divs = 1
    let res = []
    // looping selama counter kurang dari argument
    while(divs <= num) {
        // cek jika argument habis di bagi 0 maka push counter
        if (num % divs == 0) {
            res.push(divs)
            // counter ++
            divs++
            // seleain itu tambah counter
        } else {
            divs++
        }
    }
    // return panjang var penampung
    return res.length;
}

console.log(getDivisorCnt(500000))