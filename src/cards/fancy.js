import React, { Component } from "react";
import PropTypes from "prop-types";
import Rating from "../rating";
import Button from "../button";
import store from "../store";

class FancyCard extends Component {
  static propTypes = {};

  static defaultProps = {};
  handleClick = () => {
    store.dispatch({
      type: "ADD_MOVIE"
    });
  };
  render() {
    const { rate, title, imgPath } = this.props;
    return (
      <div className="fancy-card">
        <div className="flip-div">
          <img src={imgPath} alt={title} />
        </div>
        <div className="fancy-card__details">
          <h1>{title}</h1>
          <Rating rate={rate} />
          <Button onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default FancyCard;
