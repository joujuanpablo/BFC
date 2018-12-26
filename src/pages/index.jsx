import React from "react"
import Layout from '../components/Layout/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faIgloo)

export default () => (
  <Layout>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />{" "}
  </Layout>
)