// How to make an object read only?

// we can use Object.freeze read only

var person = {
    name: "mani",
    height: 6.2,
    complexion: "dark"
}

Object.freeze(person)

person.name = "gandan";
console.log(person.name);

