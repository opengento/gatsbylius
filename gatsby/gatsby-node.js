/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const got = require("got")

const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL

const getAllProductsData = async () => {
  if (!SYLIUS_URL) {
    return require("./__fixtures__/product-latest.json")
  }

  return got(`${SYLIUS_URL}/shop-api/product-latest/?limit=100000`, {
    json: true,
  }).then(response => response.body)
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const adaptProduct = originalProduct => {
    return {
      code: originalProduct.code,
      slug: originalProduct.slug,
      name: originalProduct.name,
      description: originalProduct.description,
    }
  }

  const createNodeFromProduct = productData => {
    const nodeContent = JSON.stringify(productData)

    const nodeMeta = {
      id: createNodeId(`product-${productData.code}`),
      parent: null,
      children: [],
      internal: {
        type: `Product`,
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(productData),
      },
    }

    const node = Object.assign({}, productData, nodeMeta)
    createNode(node)
  }

  // Data can come from anywhere, but for now create it manually
  return getAllProductsData().then(({ items }) => {
    items.forEach(originalProductData => {
      const productData = adaptProduct(originalProductData)
      createNodeFromProduct(productData)
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/product.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query loadProductsQuery {
        allProduct {
          nodes {
            code
            slug
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create product post pages.
    result.data.allProduct.nodes.forEach(node => {
      createPage({
        // Path for this page — required
        path: `/product/${node.slug}`,
        component: blogPostTemplate,
        context: {
          slug: node.slug,
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}
