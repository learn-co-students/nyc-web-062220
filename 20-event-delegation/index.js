console.log("Events")


/*
1. What is the target of this event?

2. What type of event is this listener listening for? Describe the event in your own word.

3. In your own words, describe what ".addEventListener" does.

4. Which part of the code below is the callback? When will it get invoked?

*/
document.addEventListener("DOMContentLoaded", function(e){
  console.log(e.target)
})

//-----------------------------------------

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
  
  const movieList = document.querySelector("#movie-list")
  movieList.append(gooniesLi)
}


const gooniesObj = {
  title: "Goonies",
  year: 1986,
  score: 10,
  imageUrl: "https://cdn.shopify.com/s/files/1/1416/8662/products/goonies_1985__linen_original_film_art_f_1200x.jpg?v=1586639573",
  genre: "Adventure"
}

renderMovie(gooniesObj)
