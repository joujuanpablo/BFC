// Chunky with lots of space
// Has contact info directly available
// Has navigation options similar to the nav
// Has a section referencing cozycabinconsulting

// Libraries
import React from 'react'
import cx from 'classnames'

//Styles
import footerStyles from './Footer.module.scss'

export default () => (
    <footer className={cx(footerStyles.footer)}>
        <div className={cx("container")}>
            <div className={cx(footerStyles.panelsWrapper)}>
                <div className={footerStyles.panel}>
                </div>
                <div className={footerStyles.panel}>
                </div>
                <div className={footerStyles.panel}>
                </div>
                <div className={footerStyles.panel}>
                </div>
            </div>
        </div>
    </footer>
)
