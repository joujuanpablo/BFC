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
    this.handleScrollHeader = this.handleScrollHeader.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
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
    this.setState(
      {
        isNavMenuOpen: !this.state.isNavMenuOpen
      },
    );
  }

  closeMobileMenu() {
    this.setState({isNavMenuOpen: false})
  }

  closeMobileMenuOnResize() {
    if (window.innerWidth > 515) {
      this.setState(
        {
          isNavMenuOpen: false,
          isScrolled: false
        }
      );
    }
  }

  handleScrollHeader() {
    let scrollTop = window.scrollY
    if (scrollTop > 2) {
      this.setState({ isScrolled: true})
       document.querySelector("header").classList.add(headerStyles.scrolled); //pass the scrolled state down as a prop instead
       document.querySelectorAll(`.${navStyles.linkText}`).forEach(e => e.classList.add(navStyles.scrolled));
       document.querySelectorAll(`.${navStyles.navMobile}`).forEach(e => e.classList.add(navStyles.scrolled));
      } else {
        this.setState({ isScrolled: false})
        document.querySelector("header").classList.remove(headerStyles.scrolled);
        document.querySelectorAll(`.${navStyles.linkText}`).forEach(e => e.classList.remove(navStyles.scrolled));
        document.querySelectorAll(`.${navStyles.navMobile}`).forEach(e => e.classList.remove(navStyles.scrolled));
    }
}

  render() {
    const { isNavMenuOpen, isScrolled } = this.state
    return (
      <div className="page">
        <Header solid={this.props.solid}>
          <NavBrand/>
          <BurgerButton
              isNavMenuOpen={isNavMenuOpen}
              onClick={this.handleMenuButtonClick.bind(this)}
          />
          <Nav viewport="desktop"/>
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
