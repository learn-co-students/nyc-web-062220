import React, { Component } from "react";
import { apiResponse } from '../api'
import DogCard from '../Components/DogCard'




class DogList extends Component {

  dogs = () => {
    return apiResponse.map((dogObj) => <DogCard key={dogObj.id} dog={dogObj} />)
  }

  render() {
    // let dogs = apiResponse.map((dogObj) => <DogCard key={dogObj.id} dog={dogObj} />)
    return <div className="dogContainer">{this.dogs()}</div>;
  }
}




export default DogList;
