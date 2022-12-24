// Write a program to print the Fibonacci number series up to a given number.
// Expected output 17 -: 0 1 1 2 3 5 8 13



var number = 17;

var i = 0;

var j = 0;

while (i < number) {
    for (j = 1; j < number; j++) {
        console.log(i + j)
    }
    i++;
}