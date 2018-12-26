// Wrapes the Header, Children, and Footer

import React from 'react'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import NavBrand from '../NavBrand/NavBrand'
import BurgerButton from '../BurgerButton/BurgerButton'
import '../../styles/index.scss'

export default ({ children }) => (
    <div className="page">
        <Header>
            <NavBrand />
            <BurgerButton />
            <Nav />
        </Header>
        { children }
        <footer>I AM A FOOTER</footer>
    </div>
)