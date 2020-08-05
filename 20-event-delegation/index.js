// console.log("Events")


/*
1. What is the target of this event?

- document

2. What type of event is this listener listening for? Describe the event in your own words.

- event = "DOMContentLoaded"
- waits to execute the JS inside the listener until the HTML has all been loaded

3. In your own words, describe what ".addEventListener" does.

- registers a listener with the browser

4. Which part of the code below is the callback? When will it get invoked?

- the anonymous function, the 2nd argument passed into addEventListener
- it will get invoked at the moment the event happens on that specified target
- it will not get invoke when the line of code for the "addEventListener" method is evaluated

*/

// document.addEventListener("DOMContentLoaded", function(e){
//   console.log(e.target)
// })

//-----------------------------------------

document.addEventListener('DOMContentLoaded', function(e){
  console.log("delegation is just getting someone else to do something you don't want to do")

  const movieList = document.querySelector("#movie-list")
  const movieCollection = [
    {
      title: 'The Goonies',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg',
      year: 1985,
      genre: 'Adventure',
      score: 100
    },
    { 
      title: 'Free Willy',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Free_willy.jpg/220px-Free_willy.jpg',
      year: 1993,
      genre: 'Family',
      score: 0  
    },
    { 
      title: 'Top Gun',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
      year: 1986,
      genre: 'Adventure',
      score: 0  
    },
    { 
      title: 'Mean Girls',
      imageUrl: 'https://img01.mgo-images.com/image/thumbnail?id=1MV270609a1c6c89af5538a6d63cea71ed4&ql=70&sizes=310x465',
      year: 2004,
      genre: 'Comedy',
      score: 0  
    },
    { 
      title: 'Parasite',
      imageUrl: 'https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg',
      year: 2019,
      genre: 'Horror',
      score: 0  
    },
    {
      title: "What About Bob?",
      year: 1991,
      genre: 'Comedy',
      score: 0,
      imageUrl: "https://www.movieartarena.com/imgs/wab.jpg"
    },
    {
      title: "The Matrix",
      year: 1999,
      genre: 'Science Fiction',
      score: 0,
      imageUrl: "https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0"
    },
    {
      title: "Jaws",
      year: 1984,
      genre: 'Horror',
      score: 0,
      imageUrl: "https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA"
    },
  ]

  // const gooniesObj = {
  //   title: "Goonies",
  //   year: 1986,
  //   score: 10,
  //   imageUrl: "https://cdn.shopify.com/s/files/1/1416/8662/products/goonies_1985__linen_original_film_art_f_1200x.jpg?v=1586639573",
  //   genre: "Adventure"
  // }

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


  // const upVoteButtons = document.querySelectorAll(".up-vote")

  // upVoteButtons.forEach(function(button){
  //   button.addEventListener("click", function(e){
      // const button = e.target
      // const parentLi = button.parentElement
      // const scoreSpan = parentLi.querySelector("span")
  
      // scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1
  //   })
  // })
  
  function clickHandler(){
    movieList.addEventListener("click", function(e){
      if(e.target.matches(".up-vote")){
        const button = e.target
        const parentLi = button.parentElement
        const scoreSpan = parentLi.querySelector("span")
        
        scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1
      } 
    })
  }

  
  // renderMovie(gooniesObj)
  clickHandler()
  renderMovies(movieCollection)
})

/*

As a user, when I click the "Up Vote" button for the Jaws movie, I should see the score for the Jaws movie increment by 1.

// √1. get the Jaws up vote button from the DOM
// √2. add a click listener to the Jaws Up Vote button
// √3. modify the DOM so that the Score goes up by 1 for the Jaws movie

*/

/*

As a user, when I click "Up Vote" for any given movie, the score for that movie should increment by 1

// 1. get ALL the up vote buttons
// 2. iterate through the collection of buttons
// 3. add click listeners to each one
// 4. modify the DOM accordingly

*/

// √1. create an array of movie objects
// 2. create a function that can accept that array and iterates over it and calls renderMovie for each object