import React from "react"
import { Link } from "gatsby"

const Product = props => {
  return (
    <div>
      <h1>{props.data.product.name}</h1>
      <ul>
        {props.data.allProduct.nodes.map(product => {
          return (
            <li key={product.slug}>
              <Link to={`/product/${product.slug}`}>{product.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Product

export const query = graphql`
  query ProductPageQuery($slug: String) {
    product(slug: { eq: $slug }) {
      code
      slug
      name
    }

    allProduct {
      nodes {
        name
        slug
      }
    }
  }
`
