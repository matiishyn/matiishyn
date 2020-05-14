import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./style.scss"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bg-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="banner-component-wrapper">
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        className="banner-img"
      />

      <div className="banner-txt-wrapper">
        <div className="banner-txt-inner">
          <h2>Hi there,</h2>
          <h1>
            I'm <span className="name">Ivan Matiishyn</span>
          </h1>
          <h3>
            <span className="code">&lt;Full Stack&gt;</span>{" "}
            <span className="code">&#123;JavaScript&#125;</span>{" "}
            Developer
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Banner
