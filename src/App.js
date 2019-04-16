import React from "react";
import PropTypes from "prop-types";
import Counters from "./Components/counters";
import NavBar from "./Components/navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 1, initValue: 2 },
        { id: 2, initValue: 4 },
        { id: 3, initValue: 8 },
        { id: 4, initValue: 6 }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }

  handleDelete = key => {
    const ctrs = this.state.counters.filter(ct => ct.id !== key);
    this.setState({ counters: ctrs });
  };

  handleIncrement = counter => {
    let counters = [...this.state.counters];
    const ctrIndx = counters.indexOf(counter);
    counter.initValue++;
    counters[ctrIndx] = counter;
    this.setState({ counters });
  };

  handleReset = () => {
    let counters = this.state.counters.map(c => {
      c.initValue = 0;
      return c;
    });
    console.log(counters);
    this.setState({ counters });
  };
}

export default App;
