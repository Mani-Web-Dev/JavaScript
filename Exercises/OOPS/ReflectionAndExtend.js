// Reflection: An object can look at itself, list an changing its properties and methods



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

var jane = {
    firstname: "Jane",
}

john.__proto__ = person;

for (var prop in john) {
    console.log(prop); // now when i am looping through it prints all the property including the properties and methods from its prototype
}


// this is a way to print the keys of the same object only

console.log("--------------Print only own property-------------------")

for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop);
    }
}

console.log("--------------Trying undescore js for extend-------------------")


_.extend({ name: 'moe' }, { age: 50 }); // first objects copies and stores al the properties of the second one



for (var prop in jane) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop);
    }
}


