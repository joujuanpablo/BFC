// Libraries
import React from 'react'
import cx from 'classnames'

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import iconAndTextStyles from './iconAndText.module.scss'

export default (props) => (
    <div className={iconAndTextStyles.wrapper}>
        <div className={iconAndTextStyles.outer}>
            <div className={cx(iconAndTextStyles.icon, iconAndTextStyles.inner)}>
                <FontAwesomeIcon icon={[props.icon.library, props.icon.name]}/>
            </div>
        </div>
        <div className={iconAndTextStyles.outer}>
            <div className={cx(iconAndTextStyles.text, iconAndTextStyles.inner)}>
                <div className={iconAndTextStyles.title}>{props.title}</div>
                <a
                    className={iconAndTextStyles.link}
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.subtitle}
                </a>
            </div>
        </div>
    </div>
)