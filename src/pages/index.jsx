import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Banner from "../components/banner/banner"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout headerTransparent>
    <SEO title="Home" />
    <Banner />
    <h1>Hi people3</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
