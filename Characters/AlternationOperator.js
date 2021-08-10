const message = "1 or 2? Vote now on your phones!";
const votes = "John voted: 2, Mike voted: 1, Kate voted: 1, James voted: 0";
// console.log(votes.match(/or|te/));

const question = "Do you have a drivers license?"
const answer = "yup";
const validAnswers = /yes|Yes|no|No/;
console.log(validAnswers.test(answer));
console.log(answer.match(validAnswers));

// Introduction
// In this lesson i'd like to introduce you to the alternation operator.
// Build Case
// Introduce the pipe operator(without, then with the global flag)
// Exercise
// Given this results string, how Would you extract the only the results?
// Or, we could use the pipe operator.

