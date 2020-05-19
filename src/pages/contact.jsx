import Layout from "../components/common/layout/layout"
import SEO from "../components/common/seo"
import React from "react"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container">
      <h1 className="section-header">get in touch with me</h1>

      <h3>Mail me at matiyishyn.ivan@gmail.com</h3>
      <h3>Call me via skype at ivan.matiyishyn</h3>

      <p>Nobody likes Contact-Me forms :)</p>
      <p>
        If you have any question then just drop me a line by email to{" "}
        <a href="mailto:matiyishyn.ivan@gmail.com">matiyishyn.ivan@gmail.com</a>
      </p>
    </div>
  </Layout>
)

export default ContactPage
