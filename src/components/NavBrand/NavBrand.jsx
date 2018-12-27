import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
    <Link to="/" title="home page">
        <FontAwesomeIcon icon="igloo" />
    </Link>
)