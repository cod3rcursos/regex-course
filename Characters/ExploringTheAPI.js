const sentence = "I Scream, You Scream, We All Scream for Ice Cream"
console.log(sentence.replace(/[A-Z]/g, ";"))
console.log(sentence.split(/cream/gi));
sentence.match(/,/g) // => ["," , ","]
sentence.match(/,/)
/* => 
  "[
    ',',
     index: 8,
    input: 'I Scream, You Scream, We All Scream for Ice Cream',
    groups: undefined
  ]"
*/
sentence.match(/popsicles/g) // => null

console.log(sentence.split(" "));
sentence.split(/,/)
console.log(sentence.split(/cream/g)); // => not mutch difference use limit instead 
sentence.split(/cream/i) // => more flexible

sentence.replace(",", "#") // => I Scream# You Scream, We All Scream for Ice Cream


sentence.replace(/,/g, "/")
// sentence.replace(/,/g, "\")

const matchComma = sentence.match(/,/g)
const splitByComma = sentence.split(/,/g)
const replaceComma = sentence.replace(/,/g, "/")
// const replaceComma = sentence.replace(/,/g, "\"")
console.log(matchComma);
console.log(splitByComma);
console.log(replaceComma);
// console.log(newSentence);
