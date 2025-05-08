"use strict";
/*
Write a function that greets a user given their first name.
Argument - firstName
Logs - Hello {firstName}
Doesn’t return anything
*/
function helloWorld(name) {
    console.log(`hello ${name}`);
}
helloWorld('sanjana');
function funSum(a, b) {
    let sum = a + b;
    console.log(sum);
    return sum;
}
funSum(sum1(2), sum2(3));
function sum1(a) {
    return a;
}
function sum2(b) {
    return b;
}
//Problem 2 - Sum function
/**Write a function that calculates the sum of two functions */
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
