// Libraries
import React from 'react';
import throttle from 'lodash/throttle';

// Components
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import NavBrand from '../NavBrand/NavBrand';
import BurgerButton from '../BurgerButton/BurgerButton';
import Footer from '../Footer/Footer';

// Styles
import '../../styles/index.scss';
import headerStyles from '../Header/Header.module.scss'
import navStyles from '../Nav/Nav.module.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavMenuOpen: false
    };
    this.closeMobileMenuOnResize = throttle(this.closeMobileMenuOnResize, 400);
    this.closeMobileMenuOnResize = this.closeMobileMenuOnResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollHeader);
    window.addEventListener('resize', this.closeMobileMenuOnResize);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollHeader);
    window.removeEventListener('resize', this.closeMobileMenuOnResize);
  }

  handleMenuClick() {
    this.setState(
      {
        isNavMenuOpen: !this.state.isNavMenuOpen
      },
    );
  }

  closeMobileMenuOnResize() {
    if (window.innerWidth > 515) {
      this.setState(
        {
          isNavMenuOpen: false,
        }
      );
    }
  }

  handleScrollHeader() {
    let scrollTop = window.scrollY
    if (scrollTop > 2) {
       document.querySelector("header").classList.add(headerStyles.scrolled);
       document.querySelectorAll(`.${navStyles.linkText}`).forEach(e => e.classList.add(navStyles.scrolled));
       document.querySelectorAll(`.${navStyles.navMobile}`).forEach(e => e.classList.add(navStyles.scrolled));
      } else {
        document.querySelector("header").classList.remove(headerStyles.scrolled);
        document.querySelectorAll(`.${navStyles.linkText}`).forEach(e => e.classList.remove(navStyles.scrolled));
        document.querySelectorAll(`.${navStyles.navMobile}`).forEach(e => e.classList.remove(navStyles.scrolled));
    }
}

  render() {
    const { isNavMenuOpen } = this.state
    return (
      <div className="page">
        <Header solid={this.props.solid}>
          <NavBrand/>
          <BurgerButton
              isNavMenuOpen={isNavMenuOpen}
              onClick={this.handleMenuClick.bind(this)}
          />
          <Nav viewport="desktop"/>
        </Header>
        <Nav viewport="mobile" isNavMenuOpen={isNavMenuOpen}/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
