// take a string as an input and print the output in the below format

var str = "Karukuvel";

var maxVal = 0;
var newString = "";

for (var i = 0; i < str.length; i++) {
    newString = newString + str[i];
    console.log(newString);
    maxVal += 1;
}

