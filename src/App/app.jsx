import React, { Component } from 'react';
import './styles.css';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import PrevOperation from '../components/PrevOperation/PrevOperation';

const specialChar = ['/', '*', '+', '-', '.'];

class App extends Component {
  state = {
    result: "",
    input: "",
    prevOperation: ""
  }

  reset =() => {
    this.setState({ input: "0", prevOperation: "" })
  }

  addToInput = val => {
    if(this.state.input === "0" || this.state.input === "") {
      this.setState({ input: val })
    } else if(this.state.input.slice(-1) === ".") {
      this.setState({ input: this.state.input + val })
    } else {
      this.setState({ input: this.state.input + " " + val })
    }
  }

  addDecimal = val => {
    if(this.state.input.slice(-1) !== ".") {
      this.setState({ input: this.state.input + val })
    }
  }

  special = val => {
    for(let i = 0; i < specialChar.length; i++) {
      if(this.state.input.slice(-1) === specialChar[i]) {
        return
      }
    }
      this.setState({ input: this.state.input + " " + val })
  }

  evaluate = async() => {
    let inputArr = this.state.input.split(" ")
    await this.setState({ result: eval(inputArr.join(" ")) })
    this.setState({ prevOperation: this.state.input + ' = ' + this.state.result, input: "0" })
  }

  render() {
  const { input, prevOperation } = this.state

    return (
      <div className="container">
        <div className="wrapper">
          <div id="display">
            <PrevOperation>{prevOperation}</PrevOperation>
            <Input>{input}</Input>
          </div>
          <div className="btns-wrapper">
            <div className="btns-grid">
              <div className="wide-top">
                <Button handleClick={this.reset} id="clear">AC</Button>
              </div>
              <div className="">
                <Button handleClick={this.special} id="divide">/</Button>  
              </div>
              <div className="">
                <Button handleClick={this.special} id="multiply">*</Button>
              </div>
              <div className="">
                <Button handleClick={this.addToInput} id="seven">7</Button>
              </div>
              <div className="">
                <Button handleClick={this.addToInput} id="eight">8</Button>
              </div>
              <div className="">
                <Button handleClick={this.addToInput} id="nine">9</Button>
              </div>
              <div className="">
                <Button handleClick={this.special} id="subtract">-</Button>
              </div>
              <div className="">
                <Button handleClick={this.addToInput} id="four">4</Button>
              </div>
              <div className="">
                <Button handleClick={this.addToInput} id="five">5</Button>
              </div>
              <div className="">
                <Button handleClick={this.addToInput} id="six">6</Button>
              </div>
              <div className="">
                <Button handleClick={this.special} id="add">+</Button>
              </div>
              <div className="">
                <Button handleClick={this.addToInput} id="one">1</Button>
              </div>
              <div className="">
                <Button handleClick={this.addToInput} id="two">2</Button>
              </div>
              <div className="">
                <Button handleClick={this.addToInput} id="three">3</Button>
              </div>
              <div className="tall">
                <Button handleClick={this.evaluate} id="equals">=</Button>
              </div>
              <div className="wide-bottom">
                <Button handleClick={this.addToInput} id="zero">0</Button>
              </div>
              <div className="">
                <Button handleClick={this.addDecimal} id="decimal">.</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    
  }
}
 
export default App;