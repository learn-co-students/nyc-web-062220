console.log("functions & stuff")

/*

1. SCOPE

  a. Global Scope
  b. Function Scope
  c. Block Scope

2. HOISTING

3. VARIABLE DECLARATION

4. FIRST CLASS FUNCTIONS

  a. callbacks
  b. closures
  c. higher order functions

*/

// ---------------------------------------------------------------------------------------------------------------------------------

// 1. SCOPE
/* 
- Lexical scoping uses the location where a variable is declared within the code to determine where that variable is available
- nested function have access to variables declared in their outer scope
- function can reach "up" to higher scope to access variables declared there, but the reverse does not work
- Lexical Scoping means that in a nested group of functions, 
the inner function have access to the variables and other resources of their parent scope.
*/

  // a. Global Scope
  // variables declared in the global scope are visible to any nested function in the same scope

  // let name = "Gary Larson"

  // function sayName(){
  //   // let name = "Bill Watterson"
  //   return `Hi my name is ${name}`
  // }


  // b. Function Scope
  // variables declared in function scope are visible within the function and any nested functions inside of it, but not visible from outside of the function
  
  // function sayName(){
  //   let firstName = "Bill Watterson"
  //   console.log(`Hi my name is ${firstName}`)

  //   const thing = () => {
  //     console.log(`inner function first name: ${firstName}`)
  //   }

  //   thing()
  // }

  // console.log(firstName) => reference error

  // c. Block Scope
  // variables declared in block scope are visible within the block and any nested functions inside of it, but not visible from outside of the block
 
  // if(true){
  //   const firstName = "Charles Schultz"

  //   console.log(firstName)
  // }


  // console.log(firstName) //=> reference error
  
// ---------------------------------------------------------------------------------------------------------------------------------
// 2. HOISTING
/* 
when JS is being compiled, certain functions and variables are "hoisted" to the top of whatever scope they're in - variable definitions don't come along for the ride
*/

// variables declared with `var` are hoisted, `let` and `const` are not

// console.log(dog)

// var dog = "Perky"

// console.log(dog)

// function declarations are hoisted, arrow functions and function expressions are not

// bark()

// function bark() {
//   console.log('woof woof')
// }


// ---------------------------------------------------------------------------------------------------------------------------------
// 3. VARIABLE DECLARATION
  // a. var
  // don't user var
  // variables declared with var can be both redeclared and redefined

  // var cat = "Houdini"
  // var cat = "Edgar"


  // b. let
  // let allows us to redefine a variable, but not redeclare it

  // // this will throw an error
  // let cat = "Houdini"
  // let cat = "Edgar"

  // this is cool
  // let cat = "Houdini"
  // cat = "Edgar"


  // c. const
  // const does not allow us to either redeclare or redefine a variable

  // // throws an error
  // const cat = "houdini"
  // const cat = "edagr"

  // throws an error
  // const cat = "Houdini"
  // cat = "Edgar"

  // // this is cool
  // const human = { name: "Steven", favColor: "turquoise" }
  // human.name = "Steven Edward"
  // human.location = "NYC"

  // let num1, num2

  // function addsOne(a, b){
  //   num1 = a + 1
  //   num2 = b + 1
  // }

  // addsOne(3,4)
  
  // console.log(num1, num2)
  
// ---------------------------------------------------------------------------------------------------------------------------------
// 4. FIRST CLASS FUNCTIONS

  /* 
  languages are said to treat functions as first class citizens 
  when they treat functions like other objects, meaning they can be
  assigned to variables, they can be passed around as arguments,
  or they can be assigned as properties inside objects.
  */

  // a. callbacks 
  // when functions are passed as arguments to other functions

  // const myMap = (collection, callback) => {
  //   const newArray = []

  //   for(const item of collection){
  //     const element = callback(item)
  //     newArray.push(element)
  //   }
    
  //   return newArray
  // }

  
  // b. higher order functions
  // functions that accept functions as parameters or that return other functions

  // function multiplier(horse, num1){
  //   return function(num2){
  //     console.log(horse)
  //     return num1 * num2
  //   }
  // }

  // multiplier(2)(2)

  // const doubler = multiplier(2)

  // c. closures
  // a closure is when a function is able to remember and access its
  // scope even when that function is executing outside of its original scope
  // a function with a backpack, a function with baggage

  // doubler(25) // => 50

  // const newArray = myMap([1,2,3,4,5], doubler)


// ----------------------------------------------------------------------

/*
first(array, [n])

Returns the first element of an array. Passing n will return the first n elements of the array.
*/

const first = (array, n = 1) => {
  array.splice(n)
  return array
}

console.log("test 1: ", JSON.stringify(first([1,2,3])) === JSON.stringify([1]))
console.log("test 2: ", JSON.stringify(first([1,2,3], 2)) === JSON.stringify([1,2]))
console.log("test 3: ", JSON.stringify(first([], 2)) === JSON.stringify([]))
