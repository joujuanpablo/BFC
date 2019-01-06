// Chunky with lots of space
// Has contact info directly available
// Has navigation options similar to the nav
// Has a section referencing cozycabinconsulting

// Libraries
import React from 'react'
import cx from 'classnames'

// Components
import Logo from '../Logo/Logo'
import IconAndText from '../IconAndText/IconAndText'

// Styles
import footerStyles from './Footer.module.scss'

// Content
import content from '../../content/content.json'

let contactFields = content.contactFields

// TODO change version prop to enum
export default () => (
    <footer className={cx(footerStyles.footer)}>
        <div className={cx("container")}>
            <div className={cx(footerStyles.panelsWrapper)}>
                {
                    contactFields.map(contactField => (
                        <div className={footerStyles.contactPanel} key={contactField.title}>
                            <IconAndText
                                icon={contactField.icon}
                                title={contactField.title}
                                link={contactField.link}
                                subtitle={contactField.subtitle}
                            />
                        </div>
                    ))
                }
                <div className={footerStyles.panel}>
                    <Logo scale={1} version="CirclesTitleSubtitle"/>
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
