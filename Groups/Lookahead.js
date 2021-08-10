const sentence = `
Today's Contributions:
€ 30.00
£ 15.00
$ 25.00
¥ 1200.25
`

const sentence2 = `
350ms
150ms
1s
440ms
20ms
`

const regex = /\D(?=\d+\.\d+)/g  
const regex2 = /[0-9]{1,3}(?!s)/g  
console.log(sentence.match(regex));