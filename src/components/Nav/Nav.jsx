// Has links to the pages
// Current page is highlighted
// Collapsed on mobile and opens with a burger menu
// User lands at top of the page when navigating around the site

// Will need state to handle highlighting current page

import { Link } from 'gatsby'
import React from 'react'
import navStyles from './Nav.module.scss'
// Need to make this responsive: hide on mobile, replace with burger menu (fontawesome), and show on click
class Nav extends React.Component {
    render() {
        return (
            <nav className={navStyles.nav}>
                <Link to="/Services" activeClassName={navStyles.active}>Services</Link>
                <Link to="/ContactUs" activeClassName={navStyles.active}>Contact Us</Link>
                <Link to="/AboutUs" activeClassName={navStyles.active}>About Us</Link>
                <Link to="/Careers" activeClassName={navStyles.active}>Careers</Link>
                <Link to="/Gallery" activeClassName={navStyles.active}>Gallery</Link>
            </nav>
        )
    }
}

export default Nav;