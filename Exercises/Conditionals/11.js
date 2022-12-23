// Write a program to print the given 3 numbers in descending orders ?


var a = 5555555555;
var b = 6666688888888888888;
var c = 777777777777777;

var num1;
var num2;
var num3;

if (a > b && a > c) {
    num1 = a;
    console.log(a);
    if (b > c) {
        num2 = b;
        num3 = c;
        console.log(num2);
        console.log(num3);
    } else {
        num2 = c;
        num3 = b;
        console.log(num2);
        console.log(num3);
    }
} else if (b > a && b > c) {
    num1 = b;
    console.log(num1);
    if (a > c) {
        num2 = a;
        num3 = c;
        console.log(num2);
        console.log(num3);
    }
    else {
        num2 = c;
        num3 = a;
        console.log(num2);
        console.log(num3);
    }
} else if (c > a && c > b) {
    num1 = c;
    console.log(num1);
    if (a > b) {
        num2 = a;
        num3 = b;
        console.log(num2);
        console.log(num3);
    } else {
        num2 = b;
        num3 = a;
        console.log(num2);
        console.log(num3);
    }
}
