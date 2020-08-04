console.log("Events")

// √1. create a new li for the goonies movie including all its internal HTML
// √2. get the movie-list ul from the DOM and save it to a variable
// √3. attach that li to the DOM somehow... -> probably to the ul

function renderMovie(movieObj){
  const gooniesLi = document.createElement('li')
  // gooniesLi.className = "stuff"
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
  
  const movieList = document.querySelector("#movie-list")
  movieList.append(gooniesLi)
}

// effectively standing in for an external data source
const gooniesObj = {
  title: "Goonies",
  year: 1986,
  score: 10,
  imageUrl: "https://cdn.shopify.com/s/files/1/1416/8662/products/goonies_1985__linen_original_film_art_f_1200x.jpg?v=1586639573",
  genre: "Adventure"
}

renderMovie(gooniesObj)
