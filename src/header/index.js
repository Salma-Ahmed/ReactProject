import React, { Component } from "react";
import PropTypes from "prop-types";
import Counter from "../counter";

const Logo = () => {
  return (
    <h1 className="header__logo">
      <img src={require("../images/logo.png")} alt="logo" />
    </h1>
  );
};
const Navigation = () => {
  return (
    <ul className="header__nav">
      <li>
        <a href="discover.html">Discover</a>
      </li>
      <li>
        <a href="genres.html">Genres</a>
      </li>
    </ul>
  );
};
const Search = () => {
  return (
    <form>
      <input type="text" placeholder="Search" />
    </form>
  );
};
class Header extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <header>
        <div className="container">
          <div>
            <Logo />
            <Navigation />
            <Search />
          </div>
          <Counter rail={40} path={160} />
        </div>
      </header>
    );
  }
}

export default Header;
