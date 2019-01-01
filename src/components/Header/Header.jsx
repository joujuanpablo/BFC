// Libraries
import React from 'react'
import cx from 'classnames'

// Styles
import headerStyles from './Header.module.scss'

class Header extends React.Component {
    render() {
        const { solid, isScrolled } = this.props
        return (
            <header className={cx(headerStyles.header, solid ? headerStyles.solid : null, isScrolled ? headerStyles.scrolled : null)}>
                <div className={cx('container', headerStyles.container)}>
                    { this.props.children }
                </div>
            </header>
        )
    }
}

export default Header;