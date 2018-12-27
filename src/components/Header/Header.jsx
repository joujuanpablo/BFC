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
    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollHeader);
      }
      componentWillUnmount() {
        window.addEventListener('scroll', this.handleScrollHeader);
      }
      handleScrollHeader() {
        let scrollTop = window.scrollY
        if (scrollTop > 2) {
           document.querySelector("header").classList.add(headerStyles.scrolled);
        } else {
          document.querySelector("header").classList.remove(headerStyles.scrolled);
        }
    }
    render() {
        return (
            <header className={cx(headerStyles.header)}>
                <div className={cx('container', headerStyles.container)}>
                    { this.props.children }
                </div>
            </header>
        )
    }
}

export default Header;