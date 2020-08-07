console.log("forms are cool")

document.addEventListener('DOMContentLoaded', function(e){

  const movieList = document.querySelector("#movie-list")

  function renderMovie(movieObj){
    const gooniesLi = document.createElement('li')
    gooniesLi.classList.add("movie")
    
    gooniesLi.innerHTML = `
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
    
    movieList.append(gooniesLi)
  }

  function renderMovies(movieCollection){
    movieCollection.forEach(function(movieObj){
      renderMovie(movieObj)
    })
  }
  
  function clickHandler(){
    document.addEventListener("click", function(e){
      if(e.target.matches(".up-vote")){
        const button = e.target
        const parentLi = button.parentElement
        const scoreSpan = parentLi.querySelector("span")
        
        scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1
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

      const newMovieForm = e.target

      const title = newMovieForm.title.value
      const year = newMovieForm.year.value
      const genre = newMovieForm.genre.value
      const imageUrl = newMovieForm.imageUrl.value
      const score = 0

      const movieObj = { title: title, year: year, genre: genre, imageUrl: imageUrl, score: score }

      renderMovie(movieObj)

      newMovieForm.reset()
    })
  }

  const getMovies = () => {
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(movieCollection => renderMovies(movieCollection))
  }

  submitHandler()
  clickHandler()
  getMovies()
})
