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
    render() {
        const { viewport, isNavMenuOpen } = this.props;
        return (
            <nav className={cx(viewport === "desktop" ? navStyles.navDesktop : navStyles.navMobile, isNavMenuOpen ? navStyles.menuOpen : null)}>
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