import React, { Component } from "react";
// import Counter from "./counter";
import ControlledCounter from "./controlledCounter";

class Counters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map(ctr => (
          <ControlledCounter
            key={ctr.id}
            deleteHandler={this.props.onDelete}
            data={ctr}
            onIncrement={this.props.onIncrement}
          >
            <h4>Counter #: {ctr.id}</h4>
          </ControlledCounter>
        ))}
      </div>
    );
  }
}

export default Counters;
