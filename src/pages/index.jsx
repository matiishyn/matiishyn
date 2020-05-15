import React from "react"
import Layout from "../components/layout/layout"
import Banner from "../components/banner/banner"
import SEO from "../components/seo"
import { About } from "../components/about/about"

const IndexPage = () => (
  <Layout headerTransparent>
    <SEO title="Home" />
    <Banner />
    <About />
  </Layout>
)

export default IndexPage
