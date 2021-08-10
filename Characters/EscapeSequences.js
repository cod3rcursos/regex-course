/*
    Escape sequences are typically used to specify actions
    such as carriage returns and tab movements on terminals
    and printers. They are also used to provide literal 
    representations of nonprinting characters and characters 
    that usually have special meanings, such as the double 
    quotation mark (").
    — Microsoft Docs

    JS Special Characters
        ' - Single Quotation Mark 
        " - Double Quotation Mark
        ` - Backtick
        \ - Backslash
    Useful Links:
        JavaScript Escape Sequences: https://www.w3schools.com/js/js_strings.asp
        Line Feed Vs Carriage Return: https://stackoverflow.com/a/1761086
*/
console.log('Hello \'World!\'')
console.log("Hello \"World!\"")
console.log(`Hello \`World!\``)
const singleQuote = 'Hello \n World!'
const doubleQuote = "Hello \t World!"
const backtick = `Hello \r World!`
const backslash = `Hello \\ World!`

console.log(singleQuote)
console.log(doubleQuote)
console.log(backtick)
console.log(backslash)

const path = require("path");