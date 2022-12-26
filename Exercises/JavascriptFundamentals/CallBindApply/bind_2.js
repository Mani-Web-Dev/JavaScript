
// Bind method example with self invoked

// With the bind() method, an object can borrow a method from another object.

// bind() method will just binds an object to a function or method(it doesn't invoke that function)

var person = {
    firstName: "Mani",
    lastname: "Gandan",
    getFullName: function () {
        var fullName = this.firstName + " " + this.lastname;
        return fullName;
    }
}
var logName = function () {
    // this not available here
    console.log("logged" + ": " + this.getFullName());
}.bind(person);


logName();




