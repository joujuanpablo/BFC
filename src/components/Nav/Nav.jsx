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

// Need to make this responsive: hide on mobile, replace with burger menu (fontawesome), and show on click
class Nav extends React.Component {
    render() {
        return (
            <nav className={cx(navStyles.nav, navStyles.excludeMobile)}>
                <Link to="/" activeClassName={navStyles.active} className={navStyles.link}>
                    <div className={navStyles.linkText}>
                        Home
                    </div>
                </Link>
                <Link to="/Services" activeClassName={navStyles.active} className={navStyles.link}>
                    <div className={navStyles.linkText}>
                        Services
                    </div>
                </Link>
                <Link to="/ContactUs" activeClassName={navStyles.active} className={navStyles.link}>
                    <div className={navStyles.linkText}>
                        Contact Us
                    </div>
                </Link>
                <Link to="/AboutUs" activeClassName={navStyles.active} className={navStyles.link}>
                    <div className={navStyles.linkText}>
                        About Us
                    </div>
                </Link>
                <Link to="/Careers" activeClassName={navStyles.active} className={navStyles.link}>
                    <div className={navStyles.linkText}>
                        Careers
                    </div>
                </Link>
                <Link to="/Gallery" activeClassName={navStyles.active} className={navStyles.link}>
                    <div className={navStyles.linkText}>
                        Gallery
                    </div>
                </Link>
            </nav>
        )
    }
}

export default Nav;