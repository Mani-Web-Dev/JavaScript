
// Closure example using factory function (Complex Closure)
// 

function makeGreeting(language) {

    return function (firstname, lastname) {

        if (language == "english") {

            return "Hello " + firstname + " " + lastname;

        } else if (language == "tamil") {

            return "Vanakkam " + firstname + " " + lastname;
        }

    }

}

var greetInEnglish = makeGreeting("english");
var greetInTamil = makeGreeting("tamil");

console.log(greetInEnglish("Mani", "Gandan"));
console.log(greetInTamil("Mani", "Gandan"));
