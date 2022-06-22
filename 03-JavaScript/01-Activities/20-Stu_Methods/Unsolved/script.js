var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Uanis Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

constellations.unshift(`Canis Major`)


var index = planets.indexOf("Venus")
planets.splice(index, 1)


var galaxy = constellations.concat(planets);
console.log(galaxy)


var starCAPS = star.replace(`polaris`,`POLARIS`)
console.log(starCAPS)