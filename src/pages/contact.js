import React from "react"
import { Link } from "gatsby"
import Header from "../components/header/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header>Hey man</Header>
    <p>Send us a message!</p>
  </div>
)