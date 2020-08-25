import React from "react";

class DogCard extends React.Component {
  // let { dog } = props
  // constructor(){}
  state = {
    clicked: false
  }

  clickHandler = () => {
    let clicked = this.state.clicked
    // invoke setState
    this.setState({ clicked: !clicked }, () => console.log("new state: ", this.state))
    // go back and see if setState resolved 
  }

  render() {
    let { dog } = this.props
    return (
      <div>
        <h2 >{dog.name}</h2>
        {this.state.clicked ? <h2>Ruff</h2> : null}
        <img alt="" src={dog.img} />
        <button onClick={this.clickHandler} className="bark">Bark</button>
      </div>
    );
  }
}

export default DogCard;
