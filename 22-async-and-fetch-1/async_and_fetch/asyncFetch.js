console.log("async and fetch")

// Asynchrony

// console.log("Hey there. JS makes being Async easy")

// setTimeout(function(){
//   console.log("I'm inside the set timeout - when did I show up?")
// }, 5000)

// console.log("I come after the setTimeout, but when did I get printed?. Interesting...🤔")


const iAmSync = () => {
  for(let i = 0; i < 10000000; i++){
    let d = new Date
  }
  console.log("All done")
}

const iAmAsync = () => {
  setTimeout(() => {
    console.log("Inside the timeout")
  }, 4000)

  console.log("outsid the timeout")
}

// Fetch

fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
.then(res => res.json())
.then(console.log)
.catch(error => {
    alert(`Error: ${error}`)
})
