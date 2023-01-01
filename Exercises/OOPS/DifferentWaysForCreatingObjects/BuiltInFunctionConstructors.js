

var a = new Number(3);
console.log(a);
console.log(typeof a);

console.log(a.toString());
console.log(a.toExponential());
console.log(a.toLocaleString());
console.log(a.valueOf());
console.log(a.toPrecision());
// Since the a variable is created using a Number constructor, "a" will have access to all the methods of the Number function constructor's prototype like the above example



var b = new String("Mani gandan");

console.log(b.endsWith());
console.log(b.length);
console.log(b.charAt());
console.log(b.matchAll());
console.log(b.includes());
console.log(b.replace());

console.log(String.prototype.indexOf("n")); // this will show -1 because its not a primitive
console.log(b.indexOf("n")); // this will return the correct index because b gets access to the String's prototype


"string".indexOf("g");

console.log("string".indexOf("g"))





















