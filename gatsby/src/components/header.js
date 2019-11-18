import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul style={{ display: "flex", flex: 1 }}>
        {menuLinks.map(({ node }) => {
          return (
            <li 
            key={node.code}
            style={{
              listStyleType: `none`,
              padding: `1rem`,
            }}
            >
              <Link to={`/categories/${node.code}`} style={{ color: `white` }}>{node.name}</Link>
            </li>
          )
        })}
      </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
