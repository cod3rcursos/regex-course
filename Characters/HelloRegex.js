const sentence  = "I Scream, You Scream, We All Scream for Ice Cream"
// In JavaScript, regular expressions are Objects!
const regexpInstance = new RegExp(/You/)
const regexLiteral = /Scream/
// const regexpInstance = new RegExp(regexLiteral)

const result = regexpInstance.exec(sentence)
console.log(sentence.match(regexpInstance))
console.log(sentence.match(regexLiteral))
