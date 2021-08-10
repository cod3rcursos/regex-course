const sentence = `
Attention! This is a top-level secret!
Attention! This is a mid-level secret!
Meh... This is a bottom-level secret...
`

// console.log(sentence.match(/[a-zA-z0-9_.]+@\w+\.\w{2,4}(\.\w{2,3})?/g));
console.log(sentence.match(/\w{3,6}-level/g));
console.log(sentence.match(/(top|mid|bottom)-level/g));

const urls = `
www.amazon.com
gmail.com
www.reddit.com
`

console.log(urls.match(/(w{3}\.)?\w+\.\w{2,3}/g));


const emailRegexRefactor = /[\w\.]+@\w+\.\w{2,4}(\.\w{2})?/g