import React from "react"
import { Link } from "gatsby"

const Category = props => {
  return (
    <div>
      <h1>{props.data.category.name}</h1>
      <ul>
        {props.data.allCategory.edges.map(({ node }) => {
          return (
            <li key={node.code}>
              <Link to={`/categories/${node.code}`}>{node.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Category

export const query = graphql`
  query CategoryPageQuery($code: String) {
    category(code: { eq: $code }) {
      code
      slug
      name
    }

    allCategory {
      edges {
        node {
          id
          code
          slug
          name
        }
      }
    }
  }
`
