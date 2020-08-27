import React from "react";
import BeyCard from './BeyCard'
import SearchForm from "./SearchForm";
class BeyContainer extends React.Component {


  beys = () => {
    return this.props.array.map((beyObj) => <BeyCard key={beyObj.id} bey={beyObj} clickHandler={this.props.clickHandler} />)
  }



  render() {
    console.log("rendering")
    return (
      <div className="index">
        <h1>Index</h1>
        {this.beys()}
      </div>
    );
  }
}

export default BeyContainer;
