// Polyfill : code that adds a feature which the engine may lack


// this code will work if the javascript engine doesn'y support Object.create(person);

if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error("Object.create implementation" + "Only accepts the first parameter")
        } function F() {
            F.prototype = o;
            return new F();
        }
    };
}
// --------------------------------------------------


var person = {
    firstName: "Default",
    lastName: "Default",
    greet: function () {
        return this.firstName + " " + this.lastName
    }
}

var john = Object.create(person);
john.firstName = "John";
john.lastName = "Doe";

console.log(john.greet()) 