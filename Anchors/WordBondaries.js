const sentences = [
    'Calm',
    'Becalmed',
    'Calmer',
    'Super-Calm'
]

const validAssignment = /^(let|var|const) \w+ = (\d+|"\w*");$/

for (const sentence of sentences) {
    console.log(validAssignment.test(sentence)); 
}