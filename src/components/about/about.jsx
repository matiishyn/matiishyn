import React from "react"
import "./styles.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faSkype } from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { info } from "./data"

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
              <a href={`skype:${info.skype}?chat`} className="contact-item">
                <FontAwesomeIcon icon={faSkype} />
                <span>{info.skype}</span>
              </a>
              <a href={`mailto:${info.email}`} className="contact-item">
                <FontAwesomeIcon icon={faAt} />
                <span>{info.email}</span>
              </a>
              <a href={info.liUrl} target="_blank" className="contact-item">
                <FontAwesomeIcon icon={faLinkedin} />
                <span>{info.liTitle}</span>
              </a>
            </div>

            <a href="/ivan_matiishyn_resume.pdf" className="btn">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  )
}
