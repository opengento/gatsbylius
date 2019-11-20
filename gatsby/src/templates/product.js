import { graphql } from "gatsby"
import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Configurator from "../components/Configurator"
import Price from "../components/Price"
import Img from "gatsby-image"
import AddToCart from "../components/AddToCart"

const ProductBreadcrumb = ({ product }) => {
  return (
    <div itemScope itemType="http://schema.org/BreadcrumbList" className="">
      <span
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/ListItem"
      >
        <Link to={`/categories/`}>
          <span itemProp="item">
            <span itemProp="name">main_taxon</span>
          </span>
        </Link>
      </span>{" "}
      /<span>{product.name}</span>
    </div>
  )
}

const ProductSynthesis = ({ product }) => {
  const [selectedVariant, selectVariant] = useState(null)

  return (
    <Fragment>
      <h1 className="product-name">{product.name}</h1>
      <p>{product.channelCode}</p>

      {selectedVariant ? (
        <Price price={selectedVariant.price} />
      ) : (
        <Price price={product.variants[0].price} />
      )}

      <Configurator
        variants={product.variants}
        onChange={variant => selectVariant(variant)}
      />

      <AddToCart
        slug={product.code}
        variantsCode={
          selectedVariant ? selectedVariant.code : product.variants[0].code
        }
        qty={1}
      />
    </Fragment>
  )
}

const Product = props => {
  return (
    <Layout>
      <div className="product-informations">
        <ProductBreadcrumb product={props.data.product} />

        <Img fixed={props.data.product.localImage.childImageSharp.fixed} />

        <ProductSynthesis product={props.data.product} />

        <h5>Détails</h5>
        <p>{props.data.product.description}</p>

        <h5>Attributs</h5>
        <ul>
          <li>Code: {props.data.product.code}</li>
          <li>
            Average Rating: {props.data.product.averageRating}
            {"/5"}
          </li>
        </ul>
      </div>
      <div className="cross-sell">
        <h4>Autres produits</h4>
        <ul>
          {props.data.allProduct.nodes.map(product => {
            return (
              <li key={product.slug}>
                <p>
                  <Link to={`/product/${product.slug}`}>{product.name}</Link>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
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
      averageRating
      variants {
        price {
          currency
          current
        }
        name
        code
      }
      localImage {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 400, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }

    allProduct {
      nodes {
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
`
