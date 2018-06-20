// Challenge
// Using the JavaScript language, have the function NumberSearch(str) take the str parameter,
// search for all the numbers in the string, add them together, then return that final number
// divided by the total amount of letters in the string. For example: if str is "Hello6 9World 2,
// Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7
// you get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, 
// and the final answer should be rounded to the nearest whole number,
// so the answer is 2. Only single digit numbers separated by spaces will be
// used throughout the whole string (So this won't ever be the case: hello44444 world).
// Each string will also have at least one letter.

// Sample Test Cases
// Input:"H3ello9-9"
// Output:4
//
// Input:"One Number*1*"
// Output:0


function NumberSearch(str) {
  // cari jumlah letter yg ada di dalam str
  let amount =  getAmountOfLetters(str)

  // ambil angka yg ada di dalam str
  let num = extractNumFromStr(str)

  // buat array angka dari num
  let arrNum = creatNums(num)

  // jumlahkan element di dalam arrNum
  let total = arrNum.reduce(function(a, b) {return a + b }, 0)

  // bagi total / jumlah letter
  let sum = total / amount;

  // bulatkan
  let output = Math.round(sum)
  
  // return hasilnya
  return output
}

function getAmountOfLetters(str) {
  // gunakan regex untuk menghilangkan angka dari string
  return str.replace(/[^A-Za-z]/gi, "").length
}

function extractNumFromStr(str) {

  // gunakan regex untuk menghilangkan huruf dari string
  // dan split element arraynya
  return str.replace(/[^\d]/gi, "").split('')
}

function creatNums(num) {
  // buat array penampung
  let nums = []

  // looping sesuai panjang num 
  // dan push setiap elementnya kedalam array penampung
  // sebelum di push lakukan parseInt untuk merubah string menjadi number

  for (let i = 0; i < num.length; i++) {
    nums.push(parseInt(num[i]));
  }
  
  return nums
}


  
  NumberSearch("H3ello9-9")// 4
  NumberSearch("Hello6 9World 2, Nic8e D7ay!") // 2
  NumberSearch("One Number*1*")//0
  NumberSearch("Two Houses")//0


  module.exports = NumberSearch;