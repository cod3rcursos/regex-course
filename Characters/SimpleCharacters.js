const fs = require("fs");
const path = require("path");

const userDataPath = path.join(__dirname, "data", "users.csv");
const users = fs.readFileSync(userDataPath).toString();

const commaSeparator = /,/
console.log(users.split(commaSeparator))
console.log(users.match(/,/g))
console.log(users.match(/Bailes/))
console.log(users.match(/Bailes/gi))
console.log(users.match(/4/gi))

// How can we separate the rows? The answer? Meta-Characters!