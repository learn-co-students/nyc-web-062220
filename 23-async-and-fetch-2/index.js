console.log("forms are cool")

document.addEventListener('DOMContentLoaded', function(e){
  const url = "http://localhost:3000/movies/"
  
  function renderMovie(movieObj, list){
    const movieLi = document.createElement('li')
    movieLi.classList.add("movie")
    movieLi.id = movieObj.id
    
    movieLi.innerHTML = `
      <h3>${movieObj.title}</h3>
      <img alt=""
          src="${movieObj.imageUrl}" />
      <h4>Year: ${movieObj.year}</h4>
      <h4>Genre: ${movieObj.genre}</h4>
      <h4>Score: <span>${movieObj.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button>&times;</button>
    `
    
    list.append(movieLi)
  }

  function renderMovies(movieCollection){
    movieCollection.forEach(function(movieObj){
      const movieList = document.querySelector("#movie-list")
      renderMovie(movieObj, movieList)
    })
  }
  
  function clickHandler(){
    document.addEventListener("click", function(e){
      if(e.target.matches(".up-vote")){
        // pessimistic rendering
        const button = e.target
        const parentLi = button.parentElement
        const movieId = parentLi.id
        const scoreSpan = parentLi.querySelector("span")
        const newScore = parseInt(scoreSpan.textContent) + 1

        const options = {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify({ score: newScore })
        }


        fetch(url + movieId, options)
        .then(res => res.json())
        .then(movieObj => {
          scoreSpan.textContent = movieObj.score
        })
        
        // scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1
      } else if (e.target.matches('#show-form')){
        const button = e.target
        const newMovieForm = document.createElement('form')

        newMovieForm.innerHTML = `
          <label>Title: </label>
          <input type="text" name="title">
          <br>
          <label>Year: </label>
          <input type="text" name="year">
          <br>
          <label>Genre: </label>
          <input type="text" name="genre">
          <br>
          <label>Image URL: </label>
          <input type="text" name="imageUrl">
          <br>
          <input type="submit" value="Add Movie">
        `

        button.insertAdjacentElement("afterend", newMovieForm)
        button.id = "hide-form"
        button.textContent = "Hide Form"
      } else if (e.target.matches('#hide-form')){
        const button = e.target
        const form = button.nextSibling
        form.remove()

        button.textContent = 'Show Form'
        button.id = "show-form"
      }
    })
  }

  const submitHandler = () => {
    document.addEventListener('submit', e => {
      e.preventDefault()

      // optimistic rendering

      //----- DOM Manipulation -----
      const newMovieForm = e.target

      const title = newMovieForm.title.value
      const year = newMovieForm.year.value
      const genre = newMovieForm.genre.value
      const imageUrl = newMovieForm.imageUrl.value
      const score = 0

      const movieObj = { 
        title: title, 
        year: year, 
        genre: genre, 
        imageUrl: imageUrl, 
        score: score 
      }

      const movieList = document.querySelector("#movie-list")
      renderMovie(movieObj, movieList)

      newMovieForm.reset()

      //----- DB Transaction -----
      
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json", // mime type
          "accept": "application/json"
        },
        body: JSON.stringify(movieObj)
      }

      fetch(url, options) 
    })
  }

  const getMovies = () => {
    fetch(url)
    .then(response => response.json())
    .then(movieCollection => renderMovies(movieCollection))
  }

  submitHandler()
  clickHandler()
  getMovies()
})
