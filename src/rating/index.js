import React, { Component } from "react";
import PropTypes from "prop-types";

class Rating extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { rate } = this.props;

    return (
      <div className="rating">
        <span>
          <i
            className="fa fa-star"
            data-active={
              rate >= 2
                ? "true"
                : Math.round(rate) === 2
                ? "true"
                : Math.round(rate) === 1
                ? "half"
                : "false"
            }
            aria-hidden="true"
          />
          {Math.round(rate) === 1 && (
            <i className="fa fa-star-half" aria-hidden="true" />
          )}
        </span>
        <span>
          <i
            className="fa fa-star"
            data-active={
              rate >= 4
                ? "true"
                : Math.round(rate) === 4
                ? "true"
                : Math.round(rate) === 3
                ? "half"
                : "false"
            }
            aria-hidden="true"
          />
          {Math.round(rate) === 3 && (
            <i className="fa fa-star-half" aria-hidden="true" />
          )}
        </span>
        <span>
          <i
            className="fa fa-star"
            data-active={
              rate >= 6
                ? "true"
                : Math.round(rate) === 6
                ? "true"
                : Math.round(rate) === 5
                ? "half"
                : "false"
            }
            aria-hidden="true"
          />
          {Math.round(rate) === 5 && (
            <i className="fa fa-star-half" aria-hidden="true" />
          )}
        </span>
        <span>
          <i
            className="fa fa-star"
            data-active={
              rate >= 8
                ? "true"
                : Math.round(rate) === 8
                ? "true"
                : Math.round(rate) === 7
                ? "half"
                : "false"
            }
            aria-hidden="true"
          />
          {Math.round(rate) === 7 && (
            <i className="fa fa-star-half" aria-hidden="true" />
          )}
        </span>
        <span>
          <i
            className="fa fa-star"
            data-active={
              rate >= 10
                ? "true"
                : Math.round(rate) === 10
                ? "true"
                : Math.round(rate) === 9
                ? "half"
                : "false"
            }
            aria-hidden="true"
          />
          {Math.round(rate) === 9 && (
            <i className="fa fa-star-half" aria-hidden="true" />
          )}
        </span>
        <span className="num">{rate}</span>
      </div>
    );
  }
}

export default Rating;
