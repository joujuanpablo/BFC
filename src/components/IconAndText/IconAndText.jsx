// Libraries
import React from 'react'
import cx from 'classnames'

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import iconAndTextStyles from './iconAndText.module.scss'

// TODO make responsive

export default (props) => (
    <div className={iconAndTextStyles.wrapper}>
        <div className={iconAndTextStyles.outer}>
            <div className={cx(iconAndTextStyles.icon, iconAndTextStyles.inner)}>
                <FontAwesomeIcon icon={[props.icon.library, props.icon.name]} size={props.icon.size}/>
            </div>
        </div>
        <div className={iconAndTextStyles.outer}>
            <div className={cx(iconAndTextStyles.text, iconAndTextStyles.inner)}>
                <div className={iconAndTextStyles.title}>{props.title}</div>
                <div className={iconAndTextStyles.subtitle}>{props.subtitle}</div>
            </div>
        </div>
    </div>
)