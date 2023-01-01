function Person() {
    this.firstName = "John";
    this.lastName = "Doe";
}

var john = Person();  // if we didn't use the new keyword this just behaves like a function and expects 
// a return statement
console.log(john);

// so the output will be undefined
// it is mandatory to add "new" keyword before a function call to create an object