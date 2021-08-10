const sentence = 
`1# Giannis 50
2# Chris 26
3# Devin 19`

const scoreData = /^(?<pos>\d+#) (?<name>\w+) (?<points>\d+)$/gm

let matchData

while(matchData = scoreData.exec(sentence)) {
    const {pos, name, points} = matchData.groups
    console.log(`Name: ${name}\nPosition: ${pos}\nPoints: ${points}`);
    console.log("---");
    
}
