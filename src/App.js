import React, { Component } from "react";
import Greet from "./Components/Greet";
import Welcome from "./Components/welcome";
import Hello from "./Components/Hello";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Name: "React",
      value: "",
    };
  }

  onClick = () => {
    const name = this.state.name === "React" ? "React Test Changed" : "React";
    this.setState({ name, value: "test" });
  };

  valueChanged = function (event) {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        {/* <Greet name="React Test" /> */
        /* <Welcome /> */}
        <Hello name={this.state.name} />
        <div>
          <p>
            <button onClick={this.onClick}>Click Me</button>
          </p>
          <input
            type="text"
            value={this.state.value}
            onChange={this.valueChanged.bind(this)}
          />
          {this.state.value}
        </div>
      </div>
    );
  }
}

export default App;
