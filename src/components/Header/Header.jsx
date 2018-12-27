// Shrinks when not at the top of the page and reopens on return to top
// Configurable to be solid or semi-transparent
// Sits overtop of page and is sticky

// Will need state to handle shrinking on scroll
// Libraries
import React from 'react'

// Styles
import headerStyles from './Header.module.scss'

class Header extends React.Component {
    render() {
        return (
            <header className={headerStyles.header}>
                { this.props.children }
            </header>
        )
    }
}

export default Header;