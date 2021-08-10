/*
- User Tag anatomy:
- Starts with an @ sign
- Uses letters to define the user tag
- Ends with a pound sign and the user id

Example: 
    @userTag#5213
*/ 
const userTagInput = "@userTag#5213";

let valid = false
const poundCharacterIndex = userTagInput.length - 5
const userId = userTagInput.substring(poundCharacterIndex + 1, userTagInput.length)

const doesntContainWhiteSpaces = userTagInput.indexOf(' ') == -1
const startsWithAt = userTagInput[0] === '@'
const hasPoundSeparator = userTagInput[poundCharacterIndex] === '#'
const idMadeOfNumbers = !isNaN(userId)

valid = 
    doesntContainWhiteSpaces &&
    startsWithAt && 
    hasPoundSeparator && 
    idMadeOfNumbers


console.log(valid);