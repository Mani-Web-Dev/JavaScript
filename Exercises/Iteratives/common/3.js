// Write a program to print the Fibonacci number series up to a given number.
// Expected output 17 -: 0 1 1 2 3 5 8 13

var number = 17;

var num1 = 0;
var num2 = 1;

console.log(num1)
console.log(num2)

var nextTerm = num1 + num2;

while (nextTerm <= number) {
    console.log(nextTerm);

    num1 = num2;
    num2 = nextTerm;
    nextTerm = num1 + num2;
}