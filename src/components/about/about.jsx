import React from "react"
import "./styles.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const START_YEAR = 2013

export const About = () => {
  const data = useStaticQuery(graphql`
    query {
      myPhoto: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="about-component">
      <div className="container">
        <h1 className="section-header">about me</h1>

        <div className="about-content">
          <div className="my-photo-wrapper">
            <Img
              fluid={data.myPhoto.childImageSharp.fluid}
              className="my-photo"
            />
          </div>
          <div className="about-description">
            <h3>Hi, I'm Ivan Matiishyn</h3>
            <h4>Full Stack JavaScript Developer</h4>
            <p>
              I'm a web developer with {new Date().getFullYear() - START_YEAR}+
              years of professional expertise in the IT industry. I have rich
              experience in building complex single page applications for
              banking, e-commerce, healthcare, finance, management systems,
              insurance as well as other solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
