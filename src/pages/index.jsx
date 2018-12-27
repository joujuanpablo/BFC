// Libraries
import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faIgloo } from '@fortawesome/free-solid-svg-icons'

// Components
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import DummySpace from '../components/DummySpace/DummySpace'

// Styles

library.add(faBars, faIgloo)

export default () => (
  <Layout>
    <Hero />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />{" "}
    <DummySpace />
  </Layout>
)