const addressInfo = "116 Winners Cir Hessmer, Louisiana(LA), 71341"
const numbersOnly = /[0-9]/g // at the end Tweak range
const capitalOnly = /[A-Z]/g
const lowerOnly = /[a-z]/g
const letters = /[B-Q1-6]/g // at the end Tweak mixed range 
console.log(addressInfo.match(numbersOnly));
console.log(addressInfo.match(capitalOnly));
console.log(addressInfo.match(lowerOnly));
console.log(addressInfo.match(letters));