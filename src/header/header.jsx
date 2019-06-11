import React, { Component } from "react";
import "./header.css";

class HeaderComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header>
        <h1 className="text-center p-2">{this.props.titleProp}</h1>
      </header>
    );
  }
}

export default HeaderComp;
