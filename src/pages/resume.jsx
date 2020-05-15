import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import React from "react"
import { Experience } from "../components/experience/experience"

const ResumePage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <Experience />
    </div>
  </Layout>
)

export default ResumePage
