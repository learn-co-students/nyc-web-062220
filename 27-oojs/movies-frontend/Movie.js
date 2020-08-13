/* 
1. Create a Movie class that can instantiate a new movie with the following properties:

  - title
  - year
  - imageUrl
  - genre
  - score

2. Create a instance method for the Movie class called `prettyPrint` that returns a string formatted like this:

  - "Title: The Matrix, Year: 1999, Genre: Science Fiction, Score: 9"
*/  

console.log("mooovies are cool")

class Movie{
  static all = []

  constructor(movieObj){
    this.id = movieObj.id
    this.title = movieObj.title
    this.year = movieObj.year
    this.score = movieObj.score
    this.genre = movieObj.genre
    this.imageUrl = movieObj.imageUrl

    this.node = this.createMovieLi()

    Movie.all.push(this)
  }

  createMovieLi(){
    const movieLi = document.createElement('li')
    movieLi.classList.add("movie")
    movieLi.dataset.movieId = this.id
    movieLi.dataset.beef = "a-ok"
    
    movieLi.innerHTML = `
      <h3>${this.title}</h3>
      <img alt=""
          src="${this.imageUrl}" />
      <h4>Year: ${this.year}</h4>
      <h4>Genre: ${this.genre}</h4>
      <h4>Score: <span>${this.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button class="delete">&times;</button>
    `

    return movieLi
  }
  
  renderMovie(movieList){
    movieList.append(this.node)
  }
  
  delete(){
    this.node.remove()
    const index = Movie.all.indexOf(this)
    Movie.all.splice(index, 1)
  }
  
  static buildMovies(movieCollection){
    return movieCollection.map(moviObj => {
      return new Movie(moviObj)
    })
  }

  static renderMovies(movies, movieList){
    for(const movie of movies){
      movie.renderMovie(movieList)
    }
  }

  static find(id){
    return Movie.all.find(movie => movie.id === id)
  }
}
