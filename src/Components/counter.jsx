import React, { Component } from "react";
import { link } from "fs";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      value: this.props.data.initValue,
      imageUrl: "https://picsum.photo/150",
      imageAlt: "Random Photo",
      tags: ["tag1", "tag2", "tag3"],
      cats: [
        { id: 1, name: "stationary" },
        { id: 2, name: "electronic" },
        { id: 3, name: "wired" }
      ]
    };
    // this.doIncrement = this.doIncrement.bind(this);
    // if (this.props.value) {
    //   alert(this.props.value);
    //   this.setState({ value: this.props.value });
    // }
  }
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div>
          {/* <img src={this.state.imageUrl} alt={this.state.imageAlt} /> */}
          {this.props.children}
        </div>
        <span className={this.getBadgeCSSClass()}>{this.formatInput()}</span>
        <button onClick={this.doIncrement} className="btn btn-secondary m-10">
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={this.bubbleDelete}
        >
          x
        </button>
        {this.renderTags()}
        <ul>
          {this.state.cats.length === 0 &&
            "Please add categories before categorizing product"}
          {this.state.cats.map(cat => (
            <li key={cat.id}>{cat.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  bubbleDelete = () => this.props.deleteHandler(this.state.id);

  renderTags() {
    if (this.state.tags.length === 0) return <strong>No tags found </strong>;
    return (
      <ol>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ol>
    );
  }

  // doIncrement() {
  //   this.state.count += 1;
  //   alert(this.state.count);
  // }
  doIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeCSSClass() {
    let classes =
      "badge m-2 badge-" +
      (this.state.value < 0
        ? "warning"
        : this.state.value > 25
        ? "danger"
        : "default");
    return classes;
  }

  formatInput() {
    const { value: count } = this.state;
    return count === 0 ? <strong>Zero</strong> : count;
  }
}
export default Counter;
