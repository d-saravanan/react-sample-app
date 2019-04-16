import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand" />
        Nike
        <div className="pull-left">
          <p>
            The total # of counters is :{" "}
            <span>
              <strong>{this.props.counters.length}</strong>
            </span>{" "}
          </p>
        </div>
      </nav>
    );
  }
}

export default NavBar;
