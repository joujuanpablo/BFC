// Libraries
import React from 'react'

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import iconAndTextStyles from './iconAndText.module.scss'

export default (props) => (
    <div className={iconAndTextStyles.wrapper}>
        <div className={iconAndTextStyles.icon}>
            <FontAwesomeIcon icon={[props.icon.library, props.icon.name]} size={props.icon.size}/>
        </div>
        <div className={iconAndTextStyles.text}>
            <div className={iconAndTextStyles.title}>{props.title}</div>
            <div className={iconAndTextStyles.subtitle}>{props.subtitle}</div>
        </div>
    </div>
)