import { Link } from "gatsby"
import React from "react"
import cx from "classnames"
import "./style.scss"
import _throttle from "lodash/throttle"

const nav = [
  { to: "/", title: "Home" },
  { to: "/resume", title: "Resume" },
  { to: "/projects", title: "Projects" },
  { to: "/blog", title: "Blog" },
  { to: "/contact", title: "Contact" },
]

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  state = {
    isHeaderLower: false,
    isMobileMenuOpen: false,
  }

  toggleMobileMenu = () =>
    this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen })

  componentDidMount() {
    window.addEventListener("scroll", _throttle(this.handleScroll, 100))
  }

  handleScroll = e => {
    if (window.pageYOffset > 50) {
      this.setState({ isHeaderLower: true })
    } else {
      this.setState({ isHeaderLower: false })
    }
  }

  render() {
    const { headerTransparent } = this.props
    const { isHeaderLower, isMobileMenuOpen } = this.state
    return (
      <header
        ref={this.ref}
        className={cx("header-component", {
          transparent: headerTransparent && !isHeaderLower,
        })}
      >
        <nav id="big-menu">
          {nav.map(el => (
            <Link activeClassName="active" to={el.to} key={el.to}>
              {el.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div id="mobile-menu-wrapper">
          <nav
            id="nav"
            className={cx("nav", { "nav--open": isMobileMenuOpen })}
            role="navigation"
          >
            <ul
              className="nav__menu"
              id="menu"
              tabIndex="-1"
              aria-label="main navigation"
              hidden
            >
              {nav.map(el => (
                <li className="nav__item" key={el.to}>
                  <Link
                    activeClassName="active"
                    to={el.to}
                    className="nav__link"
                  >
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              // href="#nav"
              className="nav__toggle"
              onClick={this.toggleMobileMenu}
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

            <div className="splash" />
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
