import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout/Layout'

export default () => (
  <Layout>
    <p>What a world.</p>
    <Link to="/ContactUs">Contact</Link>
    <img src="https://source.unsplash.com/random/400x200" alt="" />{" "}
  </Layout>
)