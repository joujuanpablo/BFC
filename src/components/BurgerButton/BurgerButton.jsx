import React from 'react'
import cx from 'classnames'

class BurgerButton extends React.Component {

    render() {
        let className = cx({
            'hamburger': true,
            'hamburger--collapse': true,
            'is-active': this.props.isNavMenuOpen,
        });
        return (
            <button onClick={this.props.onClick} className={className} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner" />
                </span>
            </button>
        )
    }
}
export default BurgerButton;
