import Layout from "../components/common/layout/layout"
import SEO from "../components/common/seo"
import React from "react"
import { graphql, Link } from "gatsby"
import Dump from "../components/Dump"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="container">
        <h1 className="section-header">blog</h1>
        <Dump data={data} />
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <>
            <Link to={fields.slug}>
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </Link>
          </>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`

// export default BlogPage
