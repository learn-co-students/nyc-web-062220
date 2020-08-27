import React from "react";
import BeyCard from './BeyCard'
import SearchForm from "./SearchForm";
class BeyContainer extends React.Component {
  state = {
    searchTerm: ""
  }

  filterBeys = () => {
    console.log(this.props.array)
    return this.props.array.filter((beyObj) => beyObj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  beys = () => {
    return this.filterBeys().map((beyObj) => <BeyCard key={beyObj.id} bey={beyObj} clickHandler={this.props.clickHandler} />)
  }

  changeHandler = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    console.log("rendering")
    return (
      <div className="index">
        <h1>Index</h1>
        <SearchForm value={this.state.searchTerm} changeHandler={this.changeHandler} />
        {this.beys()}
      </div>
    );
  }
}

export default BeyContainer;
