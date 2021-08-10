const sentence = `
SuperSonic
HyperSonic
UltraSonic
`

console.log(sentence.match(/(?<pre>(?<fix>Su|Hy|Ul)per|Ultra)Sonic/));