//class instance properties and class syntax
class Cat {
  constructor(name, age){
    this.name = name,
    this.age = age
  }

  meow(){
    return `hi my name is ${this.name}`
  }
}
let rose = new Cat('rose',9)
let lucky = new Cat('lucky',4)
//console.log(rose)


//Destructuring 
const spaceship = {
  captain: 'Jean-luc Picard',
  firstMate: 'William Riker',
  counselor: 'Deanna Troy',
  navigator: 'Geoordi La Forge'
}

// let captain = spaceship.captain
const {captain, counselor} = spaceship
//console.log(captain, ',' ,counselor)
const {deckHand} = spaceship
//console.log(deckHand)
const {firstMate} = spaceship
//console.log(firstMate)

class CrewMember{
  constructor(props){
    this.name = props.name,
    this.position = props.position,
    this.starShip = props.starShip
  }
}

class CrewMemberDestructuring{
  constructor({name, position, starShip}){
    this.name = name,
    this.position = position,
    this.starShip = starShip
  }
}

let jeanLuc = {name:'Jean-luc Picard', position:'Captain', starShip:'Enterprise'}
//console.log('normal: ', new CrewMember(jeanLuc))
//console.log('normal: ', new CrewMemberDestructuring(jeanLuc))

let form = document.querySelector('form')
form.addEventListener('submit',(e) => {
  e.preventDefault()
  let {name, catchphrase, imgUrm} = e.target
})

let arr = ['rose', 'lucky', 'bubbles', 'mr.meow']
let [red, blue, green] = arr
//console.log(green, red, blue)


//Key Value Assignment Shortcut
const title = 'Cracking the Coding Interview'
const author = 'Gayle McDowell'

let book = {title, author}
//console.log(book)


//Why pass by reference can be a problem

book2 = book
book2.title = 'Cracking the Tech Career'
console.log(`Books by ${book.author}`)
console.log(book.title)
console.log(book2.title)


//ES6 Spread Operator

const game = {
  name: 'night in the woods',
  genera: 'horror'
}

// let game2 = Object.assign({}, game)
let game2 = { genera:'indie', ...game, price:'$35'}
// game2.genera = 'indie'
//game2.price = '$35'
//console.log(game)
//console.log(game2)

 
//Dynamic object keys

const dynamicSetKeys = (obj, key, val) => {
  obj[key] = val
  return obj
}

//console.log(dynamicSetKeys({}, 'toppings', 'scallions'))

//Arrow Functions 
const implicitReturn = () => 'hi'
const implicitReturn2 = () => (
    'what'
)

const implicitReturn2 = () => {
 return( 'what', [], {}, '<div>' )
}
//return ('wat')

const noParens = str => str
const twoOrMoreArg = (str, num) => `hi my name is ${str}, I am ${num} years old`


//Passing functions around as arguments (callbacks) and ES6 Iterators (map, reduce, forEach, filter, find, etc)

const name = ['dracula', 'frankenstein', 'ghost']
let upcase = name.map(name => name.toUpperCase())

const likesIceCream = name => `${name} really likes ice cream`

let iceCream = name.map(item => likesIceCream(item))
console.log(iceCream)

//Filter 
let gamesArray = [{name:'Death Stranding', genera:'horror'}, {name:'kirby',genera:'adventure'}, {name:'ResidentEvil', genera:'horror'}, {name:'Pokemon', genera:'RPG'}]
const removeKirby = gamesArray.slice(2)

const removeHorror = gamesArray.filter(game => game.genera !== 'horror')
console.log(removeHorror)

