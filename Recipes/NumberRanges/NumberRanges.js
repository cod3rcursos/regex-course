const numbers = 
`1
50
99
100
150
179
180
185
187
189`

const matchNumbers = /^(?:[0-9]{1,2}|1[0-7][0-9]|18[0-7])$/gm

console.log(numbers.match(matchNumbers));