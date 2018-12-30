// Has links to the pages
// Current page is highlighted
// Collapsed on mobile and opens with a burger menu
// User lands at top of the page when navigating around the site

// Will need state to handle highlighting current page
// Libraries
import React from 'react'
import cx from 'classnames'

// Components
import { Link } from 'gatsby'

// Styles
import navStyles from './Nav.module.scss'

const links = [
    {
        title: 'Home',
        path: '/',
        enabled: true,
    },
    {
        title: 'Services',
        path: '/Services',
        enabled: true,
    },
    {
        title: 'Contact Us',
        path: '/ContactUs',
        enabled: true,
    },
    {
        title: 'About Us',
        path: '/AboutUs',
        enabled: true,
    },
    {
        title: 'Careers',
        path: '/Careers',
        enabled: true,
    },
    {
        title: 'Gallery',
        path: '/Gallery',
        enabled: true,
    }
]
class Nav extends React.Component {
    componentDidMount() {
        window.addEventListener('mousedown', this.handleClick, false );
    }
    componentWillUnmount() {
        window.removeEventListener('mousedown', this.handleClick, false );
    }

    handleClick = (e) => {
        var header = document.getElementsByTagName('header')[0];
        console.log('header', header)

        const { isNavMenuOpen, closeMobileMenu } = this.props;
        if ( isNavMenuOpen && closeMobileMenu ) {
            if (e.target.classList.contains(navStyles.navMobile) || header.contains(e.target)) {
                console.log('inside - the target', e.target.classList);
                return;
            } else {
                console.log('outside - the target', e.target.classList)
                closeMobileMenu();
            }
        }
      }

    render() {
        const { viewport, isNavMenuOpen, isScrolled } = this.props;
        return (
            <nav
                className={cx(viewport === "desktop" ? navStyles.navDesktop : navStyles.navMobile, isNavMenuOpen ? navStyles.menuOpen : null, isScrolled ? navStyles.scrolled : null)}
                ref={node => this.node = node}
            >
                {
                    links.map((page) => {
                        return page.enabled &&
                         <Link to={page.path} title={`${page.title} page`} activeClassName={navStyles.active} className={navStyles.link} key={page.title}>
                                <div className={navStyles.linkText}>
                                    {page.title}
                                </div>
                            </Link>
                        })
                }
            </nav>
        )
    }
}

export default Nav;