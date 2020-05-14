import { Link } from "gatsby";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        {siteTitle}
      </Link>
    </div>
  </header>
);

export default Header;
