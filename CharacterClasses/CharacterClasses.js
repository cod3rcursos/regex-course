const addressInfo = "116 Winners Cir Hessmer, Louisiana(LA), 71341"
// const numbersOnly = /0|1|2|3|4|5|6|7|8|9/g
const numbersOnly = /[0123456789]/g
const oddOnly = /[13579]/g
const evenOnly = /[24680]/g
const vowels = /[aeiou]/g
console.log(addressInfo.match(numbersOnly));
console.log(addressInfo.match(oddOnly));
console.log(addressInfo.match(evenOnly));
console.log(addressInfo.match(vowels));