import React, { Component } from "react";
import { Button } from "./components/Button";
import "./App.css";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={() => this.addToInput("7")}>7</Button>
            <Button handleClick={() => this.addToInput("8")}>8</Button>
            <Button handleClick={() => this.addToInput("9")}>9</Button>
            <Button handleClick={() => this.addToInput("/")}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={() => this.addToInput("4")}>4</Button>
            <Button handleClick={() => this.addToInput("5")}>5</Button>
            <Button handleClick={() => this.addToInput("6")}>6</Button>
            <Button handleClick={() => this.addToInput("*")}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={() => this.addToInput("1")}>1</Button>
            <Button handleClick={() => this.addToInput("2")}>2</Button>
            <Button handleClick={() => this.addToInput("3")}>3</Button>
            <Button handleClick={() => this.addToInput("+")}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={() => this.addToInput(".")}>.</Button>
            <Button handleClick={() => this.addToInput("0")}>0</Button>
            <Button handleClick={() => this.handleEqual("=")}>=</Button>
            <Button handleClick={() => this.addToInput("-")}>-</Button>
          </div>
          <div>
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
