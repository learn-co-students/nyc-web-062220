import React from "react";

class Header extends React.Component {
  render() {
    console.log("Header Props: ", this.props.header)
    return <h1>{this.props.header}</h1>;
  }
}

export default Header;
