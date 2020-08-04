console.log("listening")

// As a user, when I click on the welcome image I want to see a turquoise border around that image

// 1. get the node that we want to attach the event listener to
// 2. add a click listener to the node
// 3. on click, we want to change the border style of the image

const welcome = document.querySelector("#welcome-image")

// the event object is an object that capture a whole lot of information about the event that just occurred
welcome.addEventListener('click', function(e){
  const image = e.target
  console.dir(image)
  image.style.border = "solid thick turquoise"
})



// As a user, when the mouse moves over the welcome image I want to see a picture of a baby sloth, and i want the picture to change back when the mouse moves off the image



























































// image.style.border = "solid thick turquoise"
