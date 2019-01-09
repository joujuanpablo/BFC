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
import { Link } from 'gatsby'

// Styles
import footerStyles from './Footer.module.scss'

// Content
import content from '../../content/content.json'

// Utils
import regLinks from '../../utils/regulatoryLinks.json'

let contactFields = content.contactFields
let aboutText = content.aboutText
let copyright = content.copyrightText

// TODO change version prop to enum, define hover behaviour for all links
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
                        <NavLinks linkClass={footerStyles.NavLink} linkTextClass={footerStyles.linkText}/>
                    </div>
                </div>
                <div className={cx(footerStyles.linksPanel, footerStyles.panel)}>
                    <div className={footerStyles.heading}>Services</div>
                </div>
                <div className={cx(footerStyles.fullPanel, footerStyles.panel)}>
                    <div className={cx(footerStyles.copyright)}>{copyright}</div>
                    <div className={footerStyles.regLinks}>
                        {regLinks.map(page => {
                            return (
                                <div className={footerStyles.regLinkWrapper}>
                                    <Link to={page.path} key={page.title} title={`${page.title} page`}>{page.title}</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </footer>
)
