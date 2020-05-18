import Layout from "../components/common/layout/layout"
import SEO from "../components/common/seo"
import React from "react"
import { Experience } from "../components/experience/experience"
import { Education } from "../components/education/education"
import { Skills } from "../components/skills/skills"
import { Projects } from "../components/projects/projects"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Projects />
  </Layout>
)

export default ProjectsPage
