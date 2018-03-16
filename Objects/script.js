// Object Literals
// Create an object literal that models each of the following objects with the given properties:
// A Car 
// brand : "ford"
// numOfWheels : 12
// color : "red"

let car = {
  brand: "ford",
  numOfWheels: 12,
  color: "red"
}


// A Wizard
// universe : "Lord of the Rings"
// powers : ["Regeneration" , "Magic Staff", "Fire Bolt"]
// age : 106

let wizard = {
  universe = "Lord of the Rings",
  powers : ["Regeneration" , "Magic Staff", "Fire Bolt"],
  age : 106
}
// A Video Game Level 
// levelOfDifficulty : 5
// isFoggy : true 
// monstersExist : true

let gameLevel = {
  levelOfDifficulty : 5,
  isFoggy : true,
  monstersExist : true
}    
    
// Constructors
// Take one of the following objects you created above and replicate it using a generic constructor function. 
// Instantiate a object literal based off your constructor.  
// Ex : Wizard Gandalf or Video Game Level Lava Map

function Wizard(universe, powers, age) {
  this.universe = universe;
  this.powers = powers;
  this.age = age;
  this.setAge = function(age) {
    this.age = age;
  }
  this.usePowers = function() {
    return this.powers[Math.floor(Math.random() * this.powers.length)]
  } 
}

let gandalf = new Wizard("LOTR", ["Swordplay", "Pipe-Smoking", "Spellwork"], 500)


// Using dot notation change a property value in your object instance.
// Ex : Wizard Gandalf has age 78 and is changed to age 108

gandalf.setAge(550)

// Give your object constructor a useful function, have one of your instance call your new method
// Ex. Wizard can do Fire Attack ( gandalf.fireAttack(); )

