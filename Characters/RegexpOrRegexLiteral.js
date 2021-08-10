
const literal = /a\|b/;
const exp = new RegExp("a\\|b")

const sentence = 'The alternation operator is represented by the pipe operator("a|b")';

console.log(sentence.match(literal));
console.log(sentence.match(exp));