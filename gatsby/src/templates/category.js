import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const Category = props => {
  return (
    <Layout>
      <h1>{props.data.category.name}</h1>
      <p>Products</p>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {props.data.category.fields &&
          props.data.category.fields.products.map(product => {
            return (
              <li key={product.slug}>
                <Link to={`product/${product.slug}`}>
                  <Img fixed={product.localImage.childImageSharp.fixed} />{" "}
                  <br />
                  {product.name}
                </Link>
              </li>
            )
          })}
      </ul>
      <ul>
        {props.data.allCategory.edges.map(({ node }) => {
          return (
            <li key={node.code}>
              <Link to={`/categories/${node.code}`}>{node.name}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Category

export const query = graphql`
  query CategoryPageQuery($code: String) {
    category(code: { eq: $code }) {
      code
      slug
      name
      fields {
        products {
          id
          name
          slug
          localImage {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fixed(width: 125, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
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
