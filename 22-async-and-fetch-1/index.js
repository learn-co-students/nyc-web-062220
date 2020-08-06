console.log("forms are cool")

document.addEventListener('DOMContentLoaded', function(e){

  const movieList = document.querySelector("#movie-list")
  // const movieCollection = [
  //   {
  //     title: 'The Goonies',
  //     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg',
  //     year: 1985,
  //     genre: 'Adventure',
  //     score: 100
  //   },
  //   { 
  //     title: 'Free Willy',
  //     imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Free_willy.jpg/220px-Free_willy.jpg',
  //     year: 1993,
  //     genre: 'Family',
  //     score: 0  
  //   },
  //   { 
  //     title: 'Top Gun',
  //     imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
  //     year: 1986,
  //     genre: 'Adventure',
  //     score: 0  
  //   },
  //   { 
  //     title: 'Mean Girls',
  //     imageUrl: 'https://img01.mgo-images.com/image/thumbnail?id=1MV270609a1c6c89af5538a6d63cea71ed4&ql=70&sizes=310x465',
  //     year: 2004,
  //     genre: 'Comedy',
  //     score: 0  
  //   },
  //   { 
  //     title: 'Parasite',
  //     imageUrl: 'https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg',
  //     year: 2019,
  //     genre: 'Horror',
  //     score: 0  
  //   },
  //   {
  //     title: "What About Bob?",
  //     year: 1991,
  //     genre: 'Comedy',
  //     score: 0,
  //     imageUrl: "https://www.movieartarena.com/imgs/wab.jpg"
  //   },
  //   {
  //     title: "The Matrix",
  //     year: 1999,
  //     genre: 'Science Fiction',
  //     score: 0,
  //     imageUrl: "https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0"
  //   },
  //   {
  //     title: "Jaws",
  //     year: 1984,
  //     genre: 'Horror',
  //     score: 0,
  //     imageUrl: "https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA"
  //   },
  // ]

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
  // renderMovies(movieCollection)
})




/*

As a user, when I click the "Show Form" button, a form for entering a new movie should appear and the text in the button should change to "Hide Form".

√1. add a conditional branch to our event listener to capture clicks on the show form button
√2. create a form element with its corresponding innerHTML
√3. append the form to the DOM
4. add an submit listener on the form?
√5. change the text/id of the button

As a user, when I enter movie data into the form and click "Add Movie" the movie should appear on the bottom of the current movie list and the form should reset.


As a user, when I click the "Hide Form" button, the form should disappear and the button text should change to "Show Form"

*/





































