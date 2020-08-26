import React from "react";
import BeyCard from './BeyCard'
class BeyContainer extends React.Component {

  beys = () => {
    return this.props.array.map((beyObj) => <BeyCard key={beyObj.id} bey={beyObj} clickHandler={this.props.clickHandler} />)
  }

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.beys()}
      </div>
    );
  }
}

export default BeyContainer;
