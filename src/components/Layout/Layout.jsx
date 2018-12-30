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
    this.setState(
      {
        isNavMenuOpen: !this.state.isNavMenuOpen
      },
    );
  }

  closeMobileMenu() {
    this.setState({ isNavMenuOpen: false })
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
      } else {
        this.setState({ isScrolled: false})
    }
}

  render() {
    const { isNavMenuOpen, isScrolled } = this.state
    return (
      <div className="page">
        <Header solid={this.props.solid} scrolled={isScrolled}>
          <NavBrand/>
          <BurgerButton
              isNavMenuOpen={isNavMenuOpen}
              onClick={this.handleMenuButtonClick}
          />
          <Nav viewport="desktop" scrolled={isScrolled}/>
        </Header>
        <Nav
          viewport="mobile"
          isNavMenuOpen={isNavMenuOpen}
          scrolled={isScrolled}
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
