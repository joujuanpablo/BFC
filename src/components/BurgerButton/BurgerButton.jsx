// Libraries
import React from 'react'
import cx from 'classnames'

// Styles
import burgerButtonStyles from './BurgerButton.module.scss'

class BurgerButton extends React.Component {

    render() {
        let className = cx(
            {
                'hamburger': true,
                'hamburger--collapse': true,
                'is-active': this.props.isNavMenuOpen,
            },
            burgerButtonStyles.burgerButton, burgerButtonStyles.mobileOnly
        );
        return (
            <button onClick={this.props.onClick} className={className} type="navigation menu">
                <span className="hamburger-box">
                    <span className="hamburger-inner" />
                </span>
            </button>
        )
    }
}
export default BurgerButton;
