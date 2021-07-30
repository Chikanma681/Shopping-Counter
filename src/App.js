import "./App.css";
import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // counters
    const index = counters.indexOf(counter); //index find a way to make counter
    // indexOf() is a list method used for find the index of an element
    // we can redefine const directly but you can redefine them indirectly
    counters[index] = counter;
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters]; // counters
    const index = counters.indexOf(counter); //index find a way to make counter
    // indexOf() is a list method used for find the index of an element
    // we can redefine const directly but you can redefine them indirectly
    counters[index] = counter;
    if (counters[index].value > 0) counters[index].value -= 1;
    this.setState({ counters });
  };

  findSum = () => {
    const sumArray = [];
    let sum = 0;
    this.state.counters.map((c) => sumArray.push(c.value));
    for (let i = 0; i < sumArray.length; i++) sum += sumArray[i];
    return sum;
  };

  render() {
    return (
      <React.Fragment>
        <Navbar totalVal={this.findSum()} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onIncrease={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

/* Lifecycle Hooks
Mount(new component initialized) - constructor, render, componentDidMount()
Update(change in state or props) - render, componentDidUpdate()
UnMount(delete component)- compoentDidUnMount()
*/
