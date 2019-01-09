// Libraries
import React from 'react';
import throttle from 'lodash/throttle';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobile, faMap } from '@fortawesome/free-solid-svg-icons';

// Components
import Header from '../Header/Header';
import Nav from '../Nav/TopNav';
import NavBrand from '../NavBrand/NavBrand';
import BurgerButton from '../BurgerButton/BurgerButton';
import Footer from '../Footer/Footer';

// Styles
import '../../styles/index.scss';

library.add(faEnvelope, faMobile, faMap);

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavMenuOpen: false
    };
    this.closeMobileMenuOnResize = throttle(this.closeMobileMenuOnResize, 400);
    this.closeMobileMenuOnResize = this.closeMobileMenuOnResize.bind(this);
    this.handleScrollHeader = this.handleScrollHeader.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollHeader);
    window.addEventListener('resize', this.closeMobileMenuOnResize);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollHeader);
    window.removeEventListener('resize', this.closeMobileMenuOnResize);
  }

  handleMenuButtonClick() {
    this.setState({ isNavMenuOpen: !this.state.isNavMenuOpen });
  }

  closeMobileMenu() {
    this.setState({ isNavMenuOpen: false })
  }

  closeMobileMenuOnResize() {
    if (window.innerWidth > 767) { //mobile-breakpoint -1
      this.setState({ isNavMenuOpen: false });
    }
  }

  handleScrollHeader() {
    let scrollTop = window.scrollY
    if (scrollTop > 2) {
      this.setState({ isScrolled: true})
      } else {
        this.setState({ isScrolled: false})
    }
}

  render() {
    const { isNavMenuOpen, isScrolled } = this.state
    return (
      <div className="page">
        <Header solid={this.props.solid} isScrolled={isScrolled}>
          <NavBrand/>
          <BurgerButton
              isNavMenuOpen={isNavMenuOpen}
              onClick={this.handleMenuButtonClick}
          />
          <Nav viewport="desktop" isScrolled={isScrolled}/>
        </Header>
        <Nav
          viewport="mobile"
          isNavMenuOpen={isNavMenuOpen}
          isScrolled={isScrolled}
          closeMobileMenu={this.closeMobileMenu}
        />
        <div className="pageContent">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
