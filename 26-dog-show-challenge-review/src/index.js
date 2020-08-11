document.addEventListener('DOMContentLoaded', () => {
  const baseUrl = "http://localhost:3000/dogs/"

  const submitHandler = () => {
    document.addEventListener('submit', e => {
      e.preventDefault()
      const form = e.target

      const dogId = form.dataset.dogId
      
      const name = form.name.value
      const breed = form.breed.value
      const sex = form.sex.value

      const options = {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify({ name: name, breed: breed, sex: sex })
      }
      
      fetch(baseUrl + dogId, options)
      .then(response => {
        form.reset()
        getDogs()
      })

    })
  }
  
  const clickHandler = () => {
    document.addEventListener('click', e => {
      if(e.target.textContent === "Edit"){
        // where do I get my dog info from?
        const row = e.target.closest('tr')
        const tableCells = row.children

        const name = tableCells[0].textContent
        const breed = tableCells[1].textContent
        const sex = tableCells[2].textContent

        const dogId = row.dataset.dogId

        const form = document.querySelector('#dog-form')
        form.name.value = name
        form.breed.value = breed
        form.sex.value = sex

        form.dataset.dogId = dogId
      } else if(e.target.textContent === "Delete"){
        // delete dog from DB
        // re-render all the dogs

        const dogId = e.target.closest('tr').dataset.dogId
        const options = { method: "DELETE"}

        fetch(baseUrl + dogId, options)
        .then(getDogs)
      }
    })
  }
  
  const renderDog = (dog, tableBody) => {
    const row = document.createElement("tr")
    row.dataset.dogId = dog.id
    
    row.innerHTML= `
      <td>${dog.name}</td> 
      <td>${dog.breed}</td> 
      <td>${dog.sex}</td> 
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    `

    tableBody.append(row)
  }
  
  const renderDogs = dogs => {
    const tableBody = document.querySelector('#table-body')
    tableBody.innerHTML = ''

    for (const dog of dogs) {
      renderDog(dog, tableBody)
    }
  }
  
  const getDogs = () => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(dogs => {
      renderDogs(dogs)
    })
  }

  submitHandler()
  clickHandler()
  getDogs()
})


/*
1. On page load, render a list of already registered dogs in the table. You can fetch these dogs from http://localhost:3000/dogs.

2. The dog should be put on the table as a table row. The HTML might look something like this <tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>

* √GET to /dogs
* √iterate through collection and render each dog

3. Make a dog editable. Clicking on the edit button next to a dog should populate the top form with that dog's current information.

* √click listener(s)?
* √pass dog info up to form on click of edit

4. On submit of the form, a PATCH request should be made to http://localhost:3000/dogs/:id to update the dog information (including name, breed and sex attributes).

* √submit listener
* √make PATCH to dogs/:id

5. Once the form is submitted, the table should reflect the updated dog information. There are many ways to do this. You could search for the table fields you need to edit and update each of them in turn, but we suggest making a new get request for all dogs and rerendering all of them in the table. Make sure this GET happens after the PATCH so you can get the most up-to-date dog information.

*/