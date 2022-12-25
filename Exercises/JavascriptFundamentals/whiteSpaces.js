// White space is a invisible characters that create a litera; "space" 
// in your written code 
// Carrage returns tabs, space

// this feature of javascript is not available in return keyword

// we can see this in many popular frameworks

var
    // stores the first name
    firstname,

    // stores the last name
    lastname,

    // stores the middle name
    middlename;


function fullName

    // we can add comments like this here

    (firstname, lastname, middlename)

//  above is the parameters

{
    return firstname + " " +

        // can add space here

        middlename + " " + lastname;
}

var output = fullName("Mani", "H", "Gandan");

console.log(output);

