import React from "react"
import Layout from "../components/layout/layout"
import Banner from "../components/banner/banner"
import SEO from "../components/seo"
import { About } from "../components/about/about"
import { Services } from "../components/services/services"

const IndexPage = () => (
  <Layout headerTransparent>
    <SEO title="Home" />
    <Banner />
    <About />
    <Services />
  </Layout>
)

export default IndexPage
