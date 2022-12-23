// Write a program to print the given 3 numbers in ascending orders ?

var a = 555555555555;
var b = 66666666666;
var c = 777777777;

var num1;
var num2;
var num3;

if (a < b && a < c) {
    num1 = a;
    console.log(num1);
    if (b < c) {
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
}
else if (b < a && b < c) {
    num1 = b;
    console.log(num1);
    if (c < a) {
        num2 = c;
        num3 = a;
        console.log(num2);
        console.log(num3);
    } else {
        num2 = a;
        num3 = c;
        console.log(num2);
        console.log(num3);
    }
}
else if (c < a && c < b) {
    num1 = c;
    console.log(num1);
    if (b < a) {
        num2 = b;
        num3 = a;
        console.log(num2);
        console.log(num3);
    }
    else {
        num2 = a;
        num3 = b;
        console.log(num2);
        console.log(num3);
    }
}