// Write a program to print reverse of digits of numbers

var number = 1111000044444;
var strNum = number.toString();
var numberArray = strNum.split("")
var outputArray = [];
var i = numberArray.length - 1;
while (i >= 0) {
    outputArray.push(numberArray[i]);
    i--;
}
console.log(Number(outputArray.join("")));