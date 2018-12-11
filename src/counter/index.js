import React, { Component } from "react";
import PropTypes from "prop-types";
import store from "../store";

class Counter extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    rail: this.props.rail,
    path: this.props.path
  };
  handleClick = () => {
    if (this.state.rail < 200) {
      this.setState(prevState => {
        return {
          rail: prevState.rail + 40,
          path: prevState.path - 40
        };
      });
    }
  };
  render() {
    const { rail, path } = this.state;
    return (
      <div className="counter">
        <p className="counter__count" onClick={this.handleClick}>
          4
        </p>
        <div className="counter__chart">
          <i className="fa fa-heart" aria-hidden="true" />
          <svg>
            <circle cx="30" cy="30" r="25" />
            <circle cx="30" cy="30" r="25" strokeDasharray={[rail, path]} />
          </svg>
        </div>
      </div>
    );
  }
}

export default Counter;
