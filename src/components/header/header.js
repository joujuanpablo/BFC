import React from "react"
import headerStyles from './header.module.scss'

export default props => <h1 className={headerStyles.header}>{props.children}</h1>