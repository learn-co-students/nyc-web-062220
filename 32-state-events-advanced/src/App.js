import React from "react";
import "./App.css";
import beyArray from './api'
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'
class App extends React.Component {

  state = {
    beyArray: beyArray
  }

  containerClickHandler = (id) => {
    // Our App needs a way to know which object was clicked on
    console.log("ID in App: ", id)
    // Our array needs to be appropriately updated
    let newArray = [...this.state.beyArray]
    let foundObj = newArray.find((beyObj) => beyObj.id === id)
    foundObj.favorite = true
    // Our app needs to rerender
    this.setState({ beyArray: newArray })
  }

  favoriteClickHandler = (id) => {
    let newArray = [...this.state.beyArray]
    let foundObj = newArray.find((beyObj) => beyObj.id === id)
    foundObj.favorite = false
    this.setState({ beyArray: newArray }, () => window.alert("I got a hot sauce in my bag, swag"))

  }

  filteredBeys = () => {
    return this.state.beyArray.filter((beyObj) => beyObj.favorite)
  }

  render() {

    return (
      <div className="container">
        <BeyContainer array={beyArray} clickHandler={this.containerClickHandler} />
        <Favorites array={this.filteredBeys()} clickHandler={this.favoriteClickHandler} />
      </div>
    );
  }
};

export default App;
