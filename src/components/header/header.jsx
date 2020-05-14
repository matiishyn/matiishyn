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
  }

  componentDidMount() {
    window.addEventListener("scroll", _throttle(this.handleScroll, 100))
  }

  handleScroll = e => {
    console.log(e, window.pageYOffset)
    if (window.pageYOffset > 50) {
      this.setState({ isHeaderLower: true })
    } else {
      this.setState({ isHeaderLower: false })
    }
  }

  render() {
    const { headerTransparent } = this.props
    const { isHeaderLower } = this.state

    console.log(isHeaderLower);
    return (
      <header
        ref={this.ref}
        className={cx("header-component", {
          transparent: headerTransparent && !isHeaderLower,
        })}
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
  }
}


export default Header
