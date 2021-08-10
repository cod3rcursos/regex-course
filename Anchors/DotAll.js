const sentence = `
[Cut to the Soldier, drilling what appears to be a line of recruits.]\n

Soldier: "If fighting is sure to result in victory, then you must fight! 
Sun Tzu said that, and I'd say he knows a little more 
[He pokes a recruits' helmet] about fighting than you do, pal"
`

const dotAll = /^[\s\S]+$/g

console.log(sentence.match(dotAll));
