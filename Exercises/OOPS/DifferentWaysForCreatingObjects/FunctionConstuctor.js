/* 
Function Constructors:

A normal function that is used to construct objects.

The "this" variable points a new empty object, and object is returned from the function automatically.

when u use the "new" keyword before the function call, a new object is created.

*/


function Person() {
    this.firstName = "John";
    this.lastName = "Doe";
}

var john = new Person();
console.log(john);


//-----------------------------------------------------------------

function Car() {
    this.model = "audi a1";
    this.color = "red";
}

var audi = new Car();
console.log(audi)


//-----------------------------------------------------------------

function Girl(name, age) {
    this.name = name;
    this.age = age;
}

var g1 = new Girl("Jane", 27);
console.log(g1)


