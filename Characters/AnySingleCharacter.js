const phoneNumber1 = "(222) 555-1234"
const phoneNumber2 = "(333) 555-1234"
const phoneNumber3 = "(444) 555-1234"
const areaCode = /\(222\)/ 

console.log(phoneNumber1.match(areaCode));
console.log(phoneNumber2.match(areaCode));
console.log(phoneNumber3.match(areaCode));

const symbols = "1,(#"
const anySingle = /.{4}/ 


console.log(symbols.match(anySingle));