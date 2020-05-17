import React from "react"
import cx from "classnames"
import { Link } from "gatsby"
import "./mobile-menu.style.scss"

// https://codepen.io/mxbck/pen/xdaGNL

export const MobileMenu = ({ isOpen, menuItems, toggle }) => (
  <div id="mobile-menu-wrapper" className={cx({ "wrapper--open": isOpen })}>
    <a
      className="nav__toggle"
      onClick={toggle}
      role="button"
      aria-expanded="false"
      aria-controls="menu"
    >
      <svg
        className="menuicon"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <title>Toggle Menu</title>
        <g>
          <line
            className="menuicon__bar"
            x1="13"
            y1="16.5"
            x2="37"
            y2="16.5"
          />
          <line
            className="menuicon__bar"
            x1="13"
            y1="24.5"
            x2="37"
            y2="24.5"
          />
          <line
            className="menuicon__bar"
            x1="13"
            y1="24.5"
            x2="37"
            y2="24.5"
          />
          <line
            className="menuicon__bar"
            x1="13"
            y1="32.5"
            x2="37"
            y2="32.5"
          />
          <circle className="menuicon__circle" r="23" cx="25" cy="25" />
        </g>
      </svg>
    </a>

    <nav
      id="nav"
      className={cx("nav", { "nav--open": isOpen })}
      role="navigation"
    >
      <ul
        className="nav__menu"
        id="menu"
        tabIndex="-1"
        aria-label="main navigation"
        hidden
      >
        {menuItems.map(el => (
          <li className="nav__item" key={el.to}>
            <Link activeClassName="active" to={el.to} className="nav__link">
              {el.title}
            </Link>
          </li>
        ))}
      </ul>



      <div className="splash" />
    </nav>
  </div>
)
