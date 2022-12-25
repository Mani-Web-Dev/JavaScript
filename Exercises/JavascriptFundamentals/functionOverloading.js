// Function overloading is a feature of object - oriented programming where two or more functions can have the same name but different parameters.When a function name is overloaded with different jobs it is called Function Overloading.In Function Overloading “Function” name should be the same and the arguments should be different.Function overloading can be considered as an example of a polymorphism feature in C++.


function greet(name, language) {

    language = language || "en";

    if (language === "en") {
        return "Hello " + name + ", Good morning";
    } else {
        return "Hola " + name + ", Good morning";
    }

}

var output = greet("Mani", "sp");

console.log(output)