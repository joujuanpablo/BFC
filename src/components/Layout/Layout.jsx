// Wrapes the Header, Children, and Footer

import React from 'react'
// import { Link } from 'gatsby'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'

export default ({ children }) => (
    <div className="page">
        <Header>
            <Nav />
        </Header>
        { children }
        <footer>I AM A FOOTER</footer>
    </div>
)