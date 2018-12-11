import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  static propTypes = {};

  static defaultProps = {
    text: "Save Movie"
  };

  render() {
    return (
      <button>
        <i className="fa fa-heart" aria-hidden="true" />
        <span>{this.props.text}</span>
      </button>
    );
  }
}

export default Button;
