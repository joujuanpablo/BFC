import React from 'react'
import { Link } from 'gatsby'

export default ({ children }) => (
    <div className="page">
        <header>
            <Link to="/">Home</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/Careers">Careers</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
        </header>
        { children }
        <footer>I AM A FOOTER</footer>
    </div>
)