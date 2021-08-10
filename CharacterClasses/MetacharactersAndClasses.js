const phoneNumber = "[Joshua] +1 (613) 555-0189"
const metacharacters = /[()]+]/g
const result = phoneNumber.match(metacharacters)
console.log(result);
