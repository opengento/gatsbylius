import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello world</h1>
    <h2>Nos produits</h2>
    <ul>
      {data.allProduct.nodes.map(product => (
        <li>
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    allProduct {
      nodes {
        slug
        name
      }
    }
  }
`
