// JavaScript Program to find largest of Three Numbers ?

var num1 = 1000000000;
var num2 = 00000000001;
var num3 = 3000000000000000;

if (num1 > num2 && num1 > num3) {
    console.log(num1 + " is greater");
} else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " is greater");
} else {
    console.log(num3 + " is greater");
}