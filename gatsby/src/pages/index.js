import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="The fastest shop on earth!" />
    <h1>Hello world</h1>

    <h2>Nos produits</h2>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {data.allProduct.nodes.map(product => (
        <li key={product.slug}>
          <Link to={`/product/${product.slug}`}>
            <Img fixed={product.localImage.childImageSharp.fixed} />
            <br />
            {product.name}
          </Link>
        </li>
      ))}
    </ul>

    <h2>Nos catégories</h2>
    <ul>
      {data.allCategory.edges.map(({ node }) => {
        return (
          <li key={node.code}>
            <Link to={`/categories/${node.code}`}>{node.name}</Link>
          </li>
        )
      })}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query HomePageQuery {
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
    allProduct {
      nodes {
        slug
        name
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
`
