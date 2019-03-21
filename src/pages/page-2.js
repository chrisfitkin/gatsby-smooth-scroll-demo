import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    <h2>Smooth Scrolling Links</h2>
    <ul>
      <li>
        <Link to="/#cold-pressed">Cold Pressed</Link>
      </li>
      <li>
        <Link to="/#prism-jean-shorts">Prism jean shorts</Link>
      </li>
      <li>
        <Link to="/#wolf-kogi-shaman">Wolf kogi shaman</Link>
      </li>
      <li>
        <Link to="/#put-a-bird">Put a bird</Link>
      </li>
    </ul>
  </Layout>
)

export default SecondPage
