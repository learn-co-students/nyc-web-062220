console.log("Welcome to Mod 3")
// console.dir => looking at objects
// console.table => breaks down object properties in a table view

// alert("hey there")

/*
 **Questions
  - node?

 **Why JS?

  - three pillars - Coffee Dad Twitter
  - 1. DOM Manipulation - managing the user interaction with the website, what the user sees etc.
  - 2. Event handling - introduce interactivity into our browser, capture user input in a richer way
  - 3. Fetch - communicating with servers or APIs


  - Single Page Applications 


 
 **What is JS?

 - ECMAScript


 **How JS?

  - how to load JS into an HTML document
  - script tags for local and remote js files
  - can do inline scripts inside the HTML but probably shouldn't

  - debugger and console.log

  

  - type checking


 **Some data types
 - null

 
 - Number
  - only the one Number class
  - 0 is falsey

 
 - String
  - can use "" or ''
  - template literal ``



 - Object Literals


 
 - Array



 - undefined



 **Functions
  - multiple ways of declaring functions
  - definition vs invocation 



*/

// let name = "Steven"

// function something(){
//   console.log('before')
//   console.log(name)
//   // debugger
//   console.log(name)
//   console.log('after')
// }

// something()

// in ruby...
// def say_hi(name)
//   puts "Hi there #{name}"
// end


// function declaration
function sayHi(name) {
  console.log(`Hey there ${name}`)
}

// function expression
let sayHello = function(name){
  console.log(`Hey there ${name}`)
}

// arrow syntax
let sayHowdy = (name) => {
  console.log(`Howdy ${name}`)
}


