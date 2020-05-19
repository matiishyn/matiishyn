import Layout from "../components/common/layout/layout"
import SEO from "../components/common/seo"
import React from "react"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <div className="container">
      <h1 className="section-header">blog</h1>
      <p>
        Having spent some time configuring this part of my website
        I came to the decision that I actually don't need it. <br/>
        Even if I had a blog I don't think I would write something <br/>
        Last but not least, I prefer to communicate with other people
        rather than a code :) <br/>
        So, I'll just keep this page as it is now
      </p>
    </div>
  </Layout>
)

export default BlogPage
