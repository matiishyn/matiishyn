import Layout from "../components/common/layout/layout"
import SEO from "../components/common/seo"
import React from "react"
import { Projects } from "../components/projects/projects"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Projects />
  </Layout>
)

export default ProjectsPage
