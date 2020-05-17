import Layout from "../components/common/layout/layout"
import SEO from "../components/common/seo"
import React from "react"
import { Experience } from "../components/experience/experience"
import { Skills } from "../components/skills/skills";

const ResumePage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="d-flex d-flex-column-tablet">
        <div className="col-3">
          <Experience />
        </div>
        <div className="col-2">
          <Skills/>
        </div>
      </div>
    </div>
  </Layout>
)

export default ResumePage
