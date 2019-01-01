// Libraries
import React from 'react'
import cx from 'classnames'

// Components
import NavLinks from '../NavLinks/NavLinks'

// Styles
import navStyles from './Nav.module.scss'


class Nav extends React.Component {
    componentDidMount() {
        window.addEventListener('mousedown', this.handleClick, false );
    }
    componentWillUnmount() {
        window.removeEventListener('mousedown', this.handleClick, false );
    }

    handleClick = (e) => {
        const { isNavMenuOpen, closeMobileMenu } = this.props;

        if ( isNavMenuOpen && closeMobileMenu ) {
            var header = document.getElementsByTagName('header')[0];
            var mobileNav = document.getElementsByClassName(navStyles.navMobile)[0];
            if (mobileNav.contains(e.target) || header.contains(e.target)) {
                return;
            } else {
                closeMobileMenu();
            }
        }
      }

    render() {
        const { viewport, isNavMenuOpen, isScrolled } = this.props;
        return (
            <nav className={cx(viewport === "desktop" ? navStyles.navDesktop : navStyles.navMobile, isNavMenuOpen ? navStyles.menuOpen : null, isScrolled ? navStyles.scrolled : null)}>
                <NavLinks
                    activeClass={navStyles.active}
                    linkClass={navStyles.link}
                    linkTextClass={navStyles.linkText}
                    scrolledClass={navStyles.scrolled}
                    isScrolled={isScrolled}
                />
            </nav>
        )
    }
}

export default Nav;