// call() method can that bind() method does.

// call method will invoke a function but bind wouldn't

var person = {
    firstName: "John",
    lastname: "Doe",
    getFullName: function () {
        var fullName = this.firstName + " " + this.lastname;
        return fullName;
    }
}

var greet = function (message) {
    console.log("Hi, " + message + " " + this.firstName + " " + this.lastname);
}.call(person, "Good Night");


var greet2 = function (message) {
    console.log("Hi, " + message + " " + this.firstName + " " + this.lastname);
}

greet2.call(person, "GN");

// first arguement is the person object that is binded into the greet function. any thing that is passed after that are parameters



