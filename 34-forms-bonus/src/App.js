import React from "react";
import "./App.css";
import beyArray from './api'
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'
import CreateForm from './CreateForm'
import SearchForm from './SearchForm'
class App extends React.Component {

  state = {
    beyArray: beyArray,
    searchTerm: ""
  }

  searchHandler = (e) => {
    this.setState({ searchTerm: e.target.value })
  }
  searchArray = () => {
    return this.state.beyArray.filter((beyObj) => beyObj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }


  containerClickHandler = (id) => {
    // Our App needs a way to know which object was clicked on
    console.log("ID in App: ", id)
    // Our array needs to be appropriately updated
    let newArray = [...this.state.beyArray]
    let foundObj = newArray.find((beyObj) => beyObj.id === id)
    foundObj.favorite = true
    foundObj.num_of_clicks = foundObj.num_of_clicks + 1
    // console.log(foundObj)
    // Our app needs to rerender
    this.setState({ beyArray: newArray })
  }

  favoriteClickHandler = (id) => {
    let newArray = [...this.state.beyArray]
    let foundObj = newArray.find((beyObj) => beyObj.id === id)
    foundObj.favorite = false

    this.setState({ beyArray: newArray }, () => window.alert("I got a hot sauce in my bag, swag"))

  }

  submitHandler = (beyObj) => {
    console.log("submitting: ", beyObj)
    this.setState({ beyArray: [...this.state.beyArray, beyObj] })
  }

  filteredFavoriteBeys = () => {
    return this.searchArray().filter((beyObj) => beyObj.favorite)
  }

  sortedBeys = () => {
    return this.searchArray().sort((beyObjA, beyObjB) => beyObjB.num_of_clicks - beyObjA.num_of_clicks)
  }

  render() {

    return (
      <div>

        <CreateForm submitHandler={this.submitHandler} />
        <SearchForm value={this.state.searchTerm} changeHandler={this.searchHandler} />
        <div className="container">
          <BeyContainer array={this.sortedBeys()} clickHandler={this.containerClickHandler} />
          <Favorites array={this.filteredFavoriteBeys()} clickHandler={this.favoriteClickHandler} />
        </div>
      </div>
    );
  }
};

export default App;
