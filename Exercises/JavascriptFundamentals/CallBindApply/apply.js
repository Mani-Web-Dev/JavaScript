// apply() method 

// apply method is exactly same as the call method:

// The only difference is to define the additional parameters in array

var person = {
    firstName: "Mani",
    lastname: "Gandan",
    getFullName: function () {
        var fullName = this.firstName + " " + this.lastname;
        return fullName;
    }
}

var logPersonName = function (greet) {
    console.log(greet + " " + this.firstName + " " + this.lastname);

}

logPersonName.apply(person, ["Hi"]);
// apply method is mostly useful while doing mathematical calculations


