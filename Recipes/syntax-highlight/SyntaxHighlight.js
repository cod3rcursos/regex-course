const files = require('./utils/files')
const Highlighter = require('./utils/Highlighter')

const rawSourceCode = files.read('sourceCode.html')
const matchCodeTagContentPattern = /<code>[\s\S]*<\/code>/i
let codeContent = rawSourceCode.match(matchCodeTagContentPattern)[0]

const highligter = new Highlighter(codeContent);
const stringPattern = /(".*")/g 
const keywordPattern = /\b(package|public|class|static|if|else)\b/g
const typesPattern = /\b(void|int)\b/g
const multilinePattern = /(\/\*[\s\S]*\*\/)/g
const singlelinePattern = /(\/\/.*)/g
// Write your code here...
highligter
    .setColor(stringPattern, 'ce9178') // Strings
    .setColor(keywordPattern, 'd857cf') // Keywords
    .setColor(typesPattern, '1385e2') // Types
    .setColor(multilinePattern, '267703') // Multi-line Comments
    .setColor(singlelinePattern, '267703') // Single-line Comments

const styledSourceCode = rawSourceCode.replace(matchCodeTagContentPattern, highligter.styledCode)
files.write('styledSourceCode.html', styledSourceCode)