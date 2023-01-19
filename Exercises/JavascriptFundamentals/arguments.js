// "arguements" in a function


function user(name, age, city) {

    name = name || "Mani"
    age = age || "27"
    city = city || "Bangalore"

    if (arguments.length === 0) {
        console.log("No arguments passed")
    }

    return name + " " + age + " " + city;
}

var output = user(null, 28, null);
console.log(output);