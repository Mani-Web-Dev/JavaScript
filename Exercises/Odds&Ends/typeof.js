var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b)

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d);
console.log(Object.prototype.toString.call(d));


function Person(name) {
    this.name = name;
}
function Person1(name) {
    this.name = name;
}
var e = new Person("Name");
console.log(typeof e);
console.log(e instanceof Person)
console.log(e instanceof Person1)



console.log(typeof undefined); // make sense
console.log(typeof null); // bug since , like, forever ...


var z = function () { return 10 }
console.log(typeof z);
console.log(typeof z());







