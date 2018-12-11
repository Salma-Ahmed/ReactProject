import React, { Component } from "react";
import PropTypes from "prop-types";
import Rating from "../rating";

class SimpleCard extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { rate, title } = this.props;
    return (
      <div className="simple-card">
        <div className="overlay">
          <h1>{title}</h1>
          <Rating rate={rate} />
        </div>
        <img src={require("../images/card.png")} alt={title} />
      </div>
    );
  }
}

export default SimpleCard;
