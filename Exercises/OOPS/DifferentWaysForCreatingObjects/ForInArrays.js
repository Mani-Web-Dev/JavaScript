// Arrays are technically an object
// for in loop should not be used for arrays because it might affect the key value pairs that is Present inside a defualt Array prototype object

Array.prototype.newPlanet = "452b";


var planets = ["Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury", "Ketu", "Venus"]


for (var planet in planets) {
    console.log(planet + ": " + planets[planet])
}

// when we use forIn For array it will return the values for the array + array prototype
// This can be dangerous

// use a normal for loop instead