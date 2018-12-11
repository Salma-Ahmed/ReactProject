import React, { Component } from "react";

class Title extends Component {
  static propTypes = {};

  static defaultProps = {
    text: "Save Movie"
  };

  render() {
    const { title } = this.props;
    return <h1 className="title">{title}</h1>;
  }
}

export default Title;
