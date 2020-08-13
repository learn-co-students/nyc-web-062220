console.log("OOJS is cool")

class Animal{
  constructor(name, age){
    this.name = name
    this.age = age
  }

  sayHi(){
    return `Hi my name is ${this.name}`
  }

  static walk(){
    return "Hey I'm walking here."
  }
}


class Dog extends Animal{
  constructor(name, age, breed){
    super(name, age)
    this.breed = breed
  }
}

// function Animal(name, age){
//   this.name = name
//   this.age = age
// }

// Animal.prototype.sayHi = function(){
//   return `Hi my name is ${this.name}`
// }

let edgar = new Animal("Edgar", 12)
let perky = new Dog("Perky", 12, "German Shepherd")