const input = `
afidge_0@friendfeed.us
cmacgauhy.1@bloomberg.org
rhaseley2@ow.ly
i_billiard4@sohu.@
fbrandel3@gmail.com
rgoldring6@timesonline.
`

/*
*   expected output:
*   [
*       'afidge_0@friendfeed.us',
*       'cmacgauhy.1@bloomberg.org',
*       'rhaseley2@ow.ly',
*       'fbrandel3@gmail.com'
*   ]
*/

// Write your code here...
console.log(input.match(/[\w.]+@\w+\.\w{2,4}[a-z.]{0,3}/g));