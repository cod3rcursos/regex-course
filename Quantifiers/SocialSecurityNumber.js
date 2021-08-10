const input = `
123-45-6789
110-82-0919
177.32-1896
154-54-8599
my-ss-nmbr
5-773-5469
`
/*
*   expected output:
*   [ '123-45-6789', '110-82-0919', '154-54-8599' ]
*/

// Write your code here...
console.log(input.match(/[0-9]{3}-[0-9]{2}-[0-9]{4}/g));
console.log(input.match(/\d{3}-\d{2}-\d{4}/g));