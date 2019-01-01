// Libraries
import React from 'react'

// Components
import { Link } from 'gatsby'
import Logo from '../Logo/Logo'


export default () => (
    <Link to="/" title="home page">
        <Logo scale={0.8}/>
    </Link>
)