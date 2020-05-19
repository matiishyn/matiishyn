import React from "react"
import Layout from "../../common/layout/layout"
import SEO from "../../common/seo"
import "./post-layout.styles.scss"

const PostLayout = ({ children }) => (
  <Layout>
    <SEO title="Post" />
    <div className="container">
      <h1 className="section-header">post</h1>
      <div>{children}</div>
    </div>
  </Layout>
)

export default PostLayout
