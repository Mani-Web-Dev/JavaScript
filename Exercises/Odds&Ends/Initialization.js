// Better way to represent a data
// Before connecting the a dynamic API


var person = [
    {
        firstName: "Mani",
        lastName: "Gandan",
        age: 27,
        getFullName: function () {
            return this.firstName + " " + this.lastName
        }
    },
    {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        getFullName: function () {
            return this.firstName + " " + this.lastName
        }
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        age: 32,
        getFullName: function () {
            return this.firstName + " " + this.lastName
        }
    }
]