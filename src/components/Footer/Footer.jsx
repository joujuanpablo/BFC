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

//Styles
import footerStyles from './Footer.module.scss'

// TODO move this content out to a centralized file
let contactFields = [
    {
        title: 'Visit Us',
        subtitle: 'put address here',
        icon: {
            name: 'map',
            library: 'fa',
            size: 'lg'
        }
    },
    {
        title: 'Email Us',
        subtitle: 'putaddresshere@bfc-we.omg',
        icon: {
            name: 'envelope',
            library: 'fa',
            size: 'lg'
        }
    },
    {
        title: 'Call Us',
        subtitle: '1234 567 8910',
        icon: {
            name: 'mobile',
            library: 'fa',
            size: 'lg'
        }
    },
]

// TODO change version prop to enum
export default () => (
    <footer className={cx(footerStyles.footer)}>
        <div className={cx("container")}>
            <div className={cx(footerStyles.panelsWrapper)}>
                {
                    contactFields.map(contactField => (
                        <div className={footerStyles.contactPanel}>
                            <IconAndText
                                icon={contactField.icon}
                                title={contactField.title}
                                subtitle={contactField.subtitle} key={contactField.title}
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
