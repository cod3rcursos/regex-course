const sentence = `
Mr. Brown
Mr. Blue
Mr. Blonde
Mr. White
Mr. Pink
Mr. Orange
Nice Guy Eddie
`

console.log(sentence.match(/(?<=Mr\. )\w+/g));
console.log(sentence.match(/(?<!Mr\. )\w+/g));
console.log(sentence.match(/[\u{}]/g));