import React, { Component } from "react";
import { link } from "fs";

class ControlledCounter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div>{this.props.children}</div>
        <span className={this.getBadgeCSSClass()}>{this.formatInput()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.data)}
          className="btn btn-secondary m-10"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={this.bubbleDelete}
        >
          x
        </button>
      </React.Fragment>
    );
  }

  bubbleDelete = () => this.props.deleteHandler(this.props.data.id);

  getBadgeCSSClass() {
    let classes =
      "badge m-2 badge-" +
      (this.props.data.initValue < 0
        ? "warning"
        : this.props.data.initValue > 25
        ? "danger"
        : "default");
    return classes;
  }

  formatInput() {
    const { initValue: count } = this.props.data;
    return count === 0 ? <strong>Zero</strong> : count;
  }
}
export default ControlledCounter;
