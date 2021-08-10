const sentence = "Here are some cool looking characters & emojis Π✅⌚⛄"
const unicodes = /\u2705|\u231A|\u26C4|\u03A0/g
const result = sentence.match(unicodes)
console.log(result);