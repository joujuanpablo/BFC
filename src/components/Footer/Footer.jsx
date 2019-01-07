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
import NavLinks from '../NavLinks/NavLinks'

// Styles
import footerStyles from './Footer.module.scss'

// Content
import content from '../../content/content.json'

let contactFields = content.contactFields
let aboutText = content.aboutText

// TODO change version prop to enum
export default () => (
    <footer className={cx(footerStyles.footer)}>
        <div className={cx("container")}>
            <div className={cx(footerStyles.panelsWrapper)}>
                {
                    contactFields.map(contactField => (
                        <div className={cx(footerStyles.contactPanel, footerStyles.panel)} key={contactField.title}>
                            <IconAndText
                                icon={contactField.icon}
                                title={contactField.title}
                                link={contactField.link}
                                subtitle={contactField.subtitle}
                            />
                        </div>
                    ))
                }
                <div className={cx(footerStyles.aboutPanel, footerStyles.panel)}>
                    <Logo scale={1} version="CirclesTitleSubtitle"/>
                    <div className={footerStyles.aboutText}>
                        <p>{aboutText}</p>
                    </div>
                </div>
                <div className={cx(footerStyles.linksPanel, footerStyles.panel)}>
                    <div className={footerStyles.heading}>Navigation</div>
                    <div className={footerStyles.linksWrapper}>
                        <NavLinks />
                    </div>
                </div>
                <div className={cx(footerStyles.linksPanel, footerStyles.panel)}>
                    <div className={footerStyles.heading}>Services</div>
                </div>
                <div className={cx(footerStyles.fullPanel, footerStyles.panel)}>
                    Full panel... privacy policy and terms of use
                </div>
            </div>
        </div>
    </footer>
)
