console.log("OOJS is so cool")

document.addEventListener('DOMContentLoaded', function(e){
  const url = "http://localhost:3000/movies/"
  
  function clickHandler(){
    document.addEventListener("click", function(e){
      if(e.target.matches(".up-vote")){
        const button = e.target
        const parentLi = button.parentElement
        const movieId = parentLi.dataset.movieId
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
      } else if(e.target.matches(".delete")){
        const button = e.target
        const parentLi = button.parentElement
        const movieId = parseInt(parentLi.dataset.movieId)

        const options = {
          method: "DELETE"
        }
        
        fetch(url + movieId, options)
        .then(res => {
          // parentLi.remove()
          const movie = Movie.find(movieId)
          movie.delete()
        })

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

      const movieObj = { 
        title: title, 
        year: year, 
        genre: genre, 
        imageUrl: imageUrl, 
        score: score 
      }

      const movieList = document.querySelector("#movie-list")
      // renderMovie(movieObj, movieList)
      const movie = new Movie(movieObj)
      movie.renderMovie(movieList)

      newMovieForm.reset()
      
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json", 
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
    .then(movieCollection => {
      // renderMovies(movieCollection)
      const movieList = document.querySelector("#movie-list")
      const movies = Movie.buildMovies(movieCollection)
      Movie.renderMovies(movies, movieList)
    })
  }

  submitHandler()
  clickHandler()
  getMovies()
})

