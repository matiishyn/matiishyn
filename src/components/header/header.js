import { Link } from "gatsby"
import React from "react"
import "./style.scss"

const Header = ({ siteTitle }) => (
  <header className="header-component">
    <div>
      <Link to="/">Home</Link>
      <Link to="/">Resume</Link>
      <Link to="/">Projects</Link>
      <Link to="/">Blog</Link>
      <Link to="/">Contact</Link>
    </div>
  </header>
)

export default Header
