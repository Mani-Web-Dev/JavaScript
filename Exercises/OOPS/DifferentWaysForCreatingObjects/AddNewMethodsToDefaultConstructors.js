// we can add some additional functionality/Features to the defualt constructors

// this is an example of adding a new method to an existing String object



String.prototype.isLengthGreaterThan = function (limit) {
    return this.length > limit;
}

console.log("Mani".isLengthGreaterThan(5));

// now any string in a JS program will have access to this new method that is created



Number.prototype.isPositive = function () {
    return this > 0;
}

// console.log(3.isPositive())
// this will not work because the javascript is good enough to convert string but not a number

// so we need to wrap it inside a variable

var number = -50;
console.log(number.isPositive())


// Dangerous Aside : Built in function constructors


