import React from "react"
import { Link } from "gatsby"
import Header from '../components/header/header'

export default () => (
  <div style={{ color: `purple` }}>
    <Header>HELLO GATSBY</Header>
    <p>What a world.</p>
    <Link to="/contact">Contact</Link>
    <img src="https://source.unsplash.com/random/400x200" alt="" />{" "}
  </div>
)