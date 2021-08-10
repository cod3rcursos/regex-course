/*
    Flags are optional Meta Characters that can change the
    search behaviour of a regular expression.
    g - Global
    i - Ignore Case
*/
 
const pattern = new RegExp(/,/, "g")
const commaMatch = sentence.match(/,/g)
const screamMatch = sentence.match(/Scream/g)
const creamMatch = sentence.match(/cream/gi)
console.log(commaMatch);
console.log(screamMatch);
console.log(creamMatch);
