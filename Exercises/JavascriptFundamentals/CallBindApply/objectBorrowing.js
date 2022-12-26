// borrowing a method of an object using other bind method

var person = {
    firstname: "Mani",
    lastname: "Gandan",
    getFullName: function () {
        var fullName = this.firstname + " " + this.lastname;
        // since "this" keyword is binded to the person2 object
        // this  == person2 object
        // So this returns the values of the person two object 
        return fullName;
    }
}

var person2 = {
    firstname: "John",
    lastname: "Doe",
}

let logPerson2 = person.getFullName.bind(person2)



console.log(logPerson2())





