import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <span className="navbar-logo">
          <i className="fas fa-leaf"></i>
        </span>
        <span className="navbar-title">Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Navbar;
