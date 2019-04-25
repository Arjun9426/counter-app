import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    lis: [
      { id: 1, value: 0 },
      { id: 2, value: 11 },
      { id: 3, value: 2 },
      { id: 4, value: 4 }
    ]
  };
  handlereset = () => {
    console.log("reset is pressed");
    const lis = this.state.lis.map(item => {
      item.value = 0;
      return item;
    });
    this.setState({ lis });
  };
  handleincrease = counter => {
    const lis = this.state.lis;
    const index = lis.indexOf(counter);
    lis[index].value++;
    this.setState({ lis });
  };
  handledecrease = counter => {
    let lis = [...this.state.lis];
    let index = lis.indexOf(counter);
    if (lis[index].value !== 0) lis[index].value--;
    this.setState({ lis });
  };
  handledelete = counter => {
    const lis = this.state.lis.filter(item => item.id !== counter.id);
    this.setState({ lis });
  };
  render() {
    return (
      <reactFragment>
        <NavBar
          totalcounters={this.state.lis.filter(item => item.value > 0).length}
        />
        <main className="container">
          <button
            onClick={this.handlereset}
            className="btn btn-primary btn-sm m-4"
          >
            reset
          </button>
          <Counters
            ondelete={this.handledelete}
            onincrease={this.handleincrease}
            ondecrease={this.handledecrease}
            counter={this.state.lis}
          />
        </main>
      </reactFragment>
    );
  }
}

export default App;
