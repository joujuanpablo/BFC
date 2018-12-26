// Shrinks when not at the top of the page and reopens on return to top
// Configurable to be solid or semi-transparent
// Sits overtop of page and is sticky

// Will need state to handle shrinking on scroll

import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <header>
                { this.props.children }
            </header>
        )
    }
}

export default Header;