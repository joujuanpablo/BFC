import React from 'react'
import cx from 'classnames'

class BurgerButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            isMenuOpen: !state.isMenuOpen,
        }));
    }

    render() {
        let className = cx({
            'hamburger': true,
            'hamburger--collapse': true,
            'is-active': this.state.isMenuOpen,
        });
        return (
            <button onClick={this.handleClick} className={className} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner" />
                </span>
            </button>
        )
    }
}
export default BurgerButton;
