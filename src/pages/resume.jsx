import Layout from "../components/common/layout/layout"
import SEO from "../components/common/seo"
import React from "react"
import { Experience } from "../components/experience/experience"
import { Skills } from "../components/skills/skills"
import { Education } from "../components/education/education"

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <div className="container">
      <div className="d-flex d-flex-column-tablet">
        <div className="col-3">
          <Experience />
          <Education />
        </div>
        <div className="col-2">
          <Skills />
        </div>
      </div>
    </div>
  </Layout>
)

export default ResumePage
