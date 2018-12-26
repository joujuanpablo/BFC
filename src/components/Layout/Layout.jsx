// Wrapes the Header, Children, and Footer

import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import NavBrand from "../NavBrand/NavBrand";
// import BurgerButton from "../BurgerButton/BurgerButton";
import "../../styles/index.scss";
import cx from 'classnames'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavMenuOpen: false
    };
  }

  handleMenuClick() {
    this.setState(
      {
        isNavMenuOpen: !this.state.isNavMenuOpen
      },
    );
  }

  render() {
    let className = cx({
        'hamburger': true,
        'hamburger--collapse': true,
        'is-active': this.state.isNavMenuOpen,
    });

    return (
      <div className="page">
        <Header>
          <NavBrand />
          <button
            onClick={this.handleMenuClick.bind(this)}
            className={className}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          <Nav />
        </Header>
        {this.props.children}
        <footer>I AM A FOOTER</footer>
      </div>
    );
  }
}

export default Layout;
