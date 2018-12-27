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
import headerStyles from '../Header/Header.module.scss'
import navStyles from '../Nav/Nav.module.scss'

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
  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollHeader);
  }
  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScrollHeader);
  }
  handleScrollHeader() {
    let scrollTop = window.scrollY
    if (scrollTop > 2) {
       document.querySelector("header").classList.add(headerStyles.scrolled);
       document.querySelectorAll(`.${navStyles.linkText}`).forEach(e => e.classList.add(navStyles.scrolled));
      } else {
        document.querySelector("header").classList.remove(headerStyles.scrolled);
        document.querySelectorAll(`.${navStyles.linkText}`).forEach(e => e.classList.remove(navStyles.scrolled));
    }
}

  render() {
    return (
      <div className="page">
        <Header solid={this.props.solid}>
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
