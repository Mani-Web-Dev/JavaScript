// take a string as an input and print the output in reversed format

var str = "MANIGANDAN";

var newString = str;

for (var i = str.length; i > 0; i--) {
    i === str.length ? null : newString = newString.slice(0, -1);
    console.log(newString);
}