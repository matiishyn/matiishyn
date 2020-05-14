import { Link } from "gatsby"
import React from "react"
import cx from "classnames"
import "./style.scss"

const nav = [
  { to: "/", title: "Home" },
  { to: "/resume", title: "Resume" },
  { to: "/projects", title: "Projects" },
  { to: "/blog", title: "Blog" },
  { to: "/contact", title: "Contact" },
]

const Header = ({ headerTransparent }) => (
  <header
    className={cx("header-component", { transparent: headerTransparent })}
  >
    <div>
      {nav.map(el => (
        <Link activeClassName="active" to={el.to} key={el.to}>
          {el.title}
        </Link>
      ))}
    </div>
  </header>
)

export default Header
