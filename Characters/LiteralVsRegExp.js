const sentence = "I Scream, You Scream, We all Scream for Ice Cream"
const literal = /Scream/g
const regexp = new RegExp("Scream", "g")

console.log(sentence.match(literal));
console.log(sentence.match(regexp));

console.log(literal.exec(sentence));
console.log(regexp.exec(sentence));
