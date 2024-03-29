import React, { Component } from "react";
import HeaderComp from "./header/header";
import "./App.css";
import Home from "./home/home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "React and Firebase todo App"
    };
  }

  render() {
    return (
      <React.Fragment>
        <HeaderComp titleProp={this.state.title} />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
