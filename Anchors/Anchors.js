const sentences = [
    'const name = "Matt";',
    'const value = 10;',
    'const API_KEY = "FOO";',
    'const test = ',
]

const validAssignment = /^(let|var|const) \w+ = (\d+|"\w*");$/

for (const sentence of sentences) {
    console.log(validAssignment.test(sentence)); 
}