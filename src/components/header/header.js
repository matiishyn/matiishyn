import { Link } from "gatsby"
import React from "react"
import "./style.scss"

const nav = [
  { to: "/", title: "Home" },
  { to: "/resume", title: "Resume" },
  { to: "/projects", title: "Projects" },
  { to: "/blog", title: "Blog" },
  { to: "/contact", title: "Contact" },
]

const Header = ({ siteTitle }) => (
  <header className="header-component">
    <div>
      {nav.map(el => (
        <Link activeClassName="active" to={el.to}>
          {el.title}
        </Link>
      ))}
    </div>
  </header>
)

export default Header
