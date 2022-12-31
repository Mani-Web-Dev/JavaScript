// Understanding the prototype

// All the object (even functions) has prototype property
// It is simply a reference to a another object called as proto (it can stand by its own)
// two different objects can reference to the same prototype
// even the prototype object have reference to a another proto object


// Prototype chain : scenario from the below example
/*

    we have a person object and a john object
    now we are referencing the person object as a prototype for john object (now person object is a prototype of john object)
    when we try to access:
    console.log(john.getFullName());

    first it will see if the getFullname() method is present in the john object
    if found it will return it
    else
    it will search the method in its prototype object i.e person and if found it will return
    
    if this protoype is not having that method, it will see if  this prototype is referenced to another prototype and it will search there as well

    this is is prototype chain
 */


// below example is a dangerous aside (we should never ever do this) : because of the performance problem/
// The below examples is for demo purposes only

var person = {
    firstname: "Default",
    lastname: "Default",
    getFullName: function () {
        return this.firstname + " " + this.lastname
    }
}

var john = {
    firstname: "John",
    lastname: "Doe"
}

john.__proto__ = person;

console.log(john.getFullName());


var jane = {
    firstname: "Jane"
}

jane.__proto__ = person;
console.log(jane.getFullName())



