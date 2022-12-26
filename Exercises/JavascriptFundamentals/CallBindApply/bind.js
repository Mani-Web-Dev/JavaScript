
// Bind method

// With the bind() method, an object can borrow a method from another object.

// bind() method will just binds an object to a function or method(it doesn't invoke that function)



var person = {
    firstName: "John",
    lastname: "Doe",
    getFullName: function () {
        var fullName = this.firstName + " " + this.lastname;
        return fullName;
    }
}
var logName = function () {
    // this not available here
    console.log("logged" + ": " + this.getFullName());
}

// logPersonName stores a copy of logName and borrows the person object and assigns it to the this keyword

var logPersonName = logName.bind(person);

logPersonName();





