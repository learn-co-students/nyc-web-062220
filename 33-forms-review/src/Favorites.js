import React, { Component } from "react";
import BeyCard from './BeyCard'
export default class Favorites extends Component {
  render() {
    let beys = this.props.array.map((beyObj) => <BeyCard key={beyObj.id} bey={beyObj} clickHandler={this.props.clickHandler} favorite />)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {beys}
      </div>
    );
  }
}
