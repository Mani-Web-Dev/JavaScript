// Everything in Javascript is an Object
// means it will have its prototype except javascript base object

var a = 10;
console.log("-------------------a---------------------");
console.log(a.__proto__);
console.log(a.__proto__.__proto__); // this will return the base object from tne javascript core
console.log(a.__proto__.__proto__.__proto__); //this will throw an error because the base object is the last and final
console.log("-------------------a---------------------");


var b = []
console.log("-------------------b---------------------");
console.log(b.__proto__);
console.log(b.__proto__.__proto__);
console.log("-------------------b---------------------");


function c() { }
console.log("-------------------c---------------------");
console.log(c.__proto__);
console.log(c.__proto__.__proto__);
console.log("-------------------c---------------------");