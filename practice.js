var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune :3
};

for (let planet in planetMoons){
  
  //let numberOfMoons = planetMoons[planet]
  //console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons)
  console.log(planetMoons.hasOwnProperty())
}