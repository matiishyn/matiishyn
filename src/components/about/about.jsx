import React from "react"
import "./styles.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { info, social } from "./data"

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
            <h3>{info.h3}</h3>
            <h4>{info.h4}</h4>
            <p>{info.p}</p>

            <div className="contacts">
              {social.map(el => (
                <a
                  key={el.title}
                  href={el.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <FontAwesomeIcon icon={el.icon} />
                  <span>{el.title}</span>
                </a>
              ))}
            </div>

            <a target="_blank" 
              href="https://matiishyn.notion.site/Ivan-Matiishyn-Engineering-Manager-16719d209a458071b4dbf713b5279605" className="btn">
              Open Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
