// Wrapes the Header, Children, and Footer

import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import NavBrand from "../NavBrand/NavBrand";
import BurgerButton from "../BurgerButton/BurgerButton";
import "../../styles/index.scss";

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
    return (
      <div className="page">
        <Header>
          <NavBrand />
        <BurgerButton isNavMenuOpen={this.state.isNavMenuOpen} onClick={this.handleMenuClick.bind(this)} />
          <Nav />
        </Header>
        {this.props.children}
        <footer>I AM A FOOTER</footer>
      </div>
    );
  }
}

export default Layout;
