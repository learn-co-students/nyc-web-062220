/*

√1. As a user, I should see the timer increment every second once the page has loaded.

- get the counter from dom
- increment every second (somehow...)


√2. As a user, I can manually increment and decrement the counter using the plus and minus buttons.

- put a click listener on the document
- use delegation to implement differential behavior for plus and minus


√3. As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

- leverage existing click listener on the document
- if the number hasn't been liked yet, print "Number has been liked"
- if the number has already been liked, print "Number has been liked n times"

√4. As a user, I can pause the counter, which should
  * pause the counter
  * disable all buttons except the pause button
  * the pause button should then show the text "resume."
  
  - use exising click listener
  - implement all the behavior we need 


√5. When 'resume' is clicked, it should restart the counter and re-enable the buttons.

- use existing click listener
- for "resume" case, just reverse everything we did in pause

√6. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

- make a submit listener
- prevent default
- get the comment out of the form
- render the comment on the DOM


*/


document.addEventListener('DOMContentLoaded', function(e){
  const likeCount = {}

  let timer = setInterval(function(){
    incrementCounter(1)
  }, 1000)

  document.addEventListener('submit', function(e){
    e.preventDefault()
    const form = e.target
    const comment = form.comment.value
    const p = document.createElement('p')
    p.textContent = comment
    document.querySelector('#list').append(p)
    form.reset()
  })

  document.addEventListener('click', function(e){
    if(e.target.id === "minus"){
      incrementCounter(-1)
    } else if (e.target.id === "plus"){
      incrementCounter(1)
    } else if (e.target.id === "heart"){
      // base case number is liked for the first time
      const counter = document.getElementById('counter')
      const currentNum = parseInt(counter.textContent)
      
      if(!likeCount[currentNum]){ // number is not in likeCount
        likeCount[currentNum] = 1
        const ul = document.querySelector('.likes')
        const li = document.createElement('li')
        li.dataset.number = currentNum
        li.textContent = `${currentNum} has been liked 1 time!! 🤡`
        ul.append(li)
      } else if(likeCount[currentNum]) { // number has been liked
        likeCount[currentNum] += 1
        const li = document.querySelector(`[data-number="${currentNum}"]`)
        li.textContent = `${currentNum} has been liked ${likeCount[currentNum]} times!! 👾`
      }
    } else if (e.target.id === "pause"){
      clearInterval(timer)

      document.querySelector('#minus').disabled = true
      document.querySelector('#plus').disabled = true
      document.querySelector('#heart').disabled = true
      document.querySelector('#submit').disabled = true

      e.target.textContent = 'resume'
      e.target.id = 'resume'
    } else if (e.target.id === 'resume'){
      timer = setInterval(function(){
        incrementCounter(1)
      }, 1000)

      document.querySelector('#minus').disabled = false
      document.querySelector('#plus').disabled = false
      document.querySelector('#heart').disabled = false
      document.querySelector('#submit').disabled = false

      e.target.textContent = 'pause'
      e.target.id = 'pause'
    }
  })

  function incrementCounter(n){
    const counter = document.getElementById('counter')
    const currentNum = parseInt(counter.textContent)
    const newNum = currentNum + n
    counter.textContent = newNum
  }



})