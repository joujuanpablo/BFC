// Shrinks when not at the top of the page and reopens on return to top
// Configurable to be solid or semi-transparent
// Sits overtop of page and is sticky

// Will need state to handle shrinking on scroll
// Libraries
import React from 'react'
import cx from 'classnames'

// Styles
import headerStyles from './Header.module.scss'


class Header extends React.Component {
    render() {
        return (
            <header className={headerStyles.header}>
                <div className={cx('container', headerStyles.container)}>
                    { this.props.children }
                </div>
            </header>
        )
    }
}

export default Header;