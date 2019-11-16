import React from "react"
import { Link } from "gatsby"

const Product = props => {
  return (
    <div class="product-page">
       <div class="product-informations">
          <h1 class="product-name">{props.data.product.name}</h1>
          <img src={props.data.product.firstImage.cachedPath} alt={props.data.product.firstImage.code} />
          <p>Channel: {props.data.product.channelCode} | <small>Code: {props.data.product.code}</small></p>
          <p>{props.data.product.description}</p>
      </div>
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
      description
      channelCode
      firstImage {
        code
        path
        cachedPath
      }
    }

    allProduct {
      nodes {
        name
        slug
      }
    }
  }
`
