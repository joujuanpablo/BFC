// Libraries
import React from "react";

// Components
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import NavBrand from "../NavBrand/NavBrand";
import BurgerButton from "../BurgerButton/BurgerButton";
import Footer from '../Footer/Footer';

// Styles
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
            <BurgerButton
                isNavMenuOpen={this.state.isNavMenuOpen}
                onClick={this.handleMenuClick.bind(this)}
            />
          <Nav />
        </Header>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
