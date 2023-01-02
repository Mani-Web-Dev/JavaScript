// Object Pure Prototypal inheritance
// this is a new feature of javascript and it is supported by most of the latest browsers


// using this method we can inherit all the properties of the base object.


var person = {
    firstName: "Default",
    lastName: "Default",
    greet: function () {
        return this.firstName + " " + this.lastName
    }
}

var john = Object.create(person);

// This latest feature might not be available in older browsers, we should use polyfills for this

john.firstName = "John";
john.lastName = "Doe";
// we want to override any method or properties we an do it as mention line 20,21

console.log(john.greet()) // john has access to all the properties and methods that persoon has