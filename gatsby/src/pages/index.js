import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const [contributors, setContributors] = React.useState(null)
  React.useEffect(() => {
    fetch("https://api.github.com/repos/opengento/gatsbylius/contributors")
      .then(response => response.json())
      .then(setContributors)
  }, [])

  return (
    <Layout>
      <SEO title="The fastest shop on earth!" />
      <h1>You're browsing the fastest shop on earth!</h1>
      <p>
        This is an experimentation created at a friendly{" "}
        <a href="https://opengento.fr/">Opengento</a> meetup in France, over a
        weekend. It uses the{" "}
        <a href="https://github.com/Sylius/ShopApiPlugin">Sylius Shop API</a> as
        a <a href="https://www.gatsbyjs.org/">Gatsby</a> source, to create a
        fast eCommerce PWA.
      </p>

      <section>
        <h2>Our products</h2>
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
      </section>

      <section>
        <h2>Our categories</h2>
        <ul>
          {data.allCategory.edges.map(({ node }) => {
            return (
              <li key={node.code}>
                <Link to={`/categories/${node.code}`}>{node.name}</Link>
              </li>
            )
          })}
        </ul>
      </section>

      {contributors && (
        <section>
          <h2>Thanks!</h2>
          <p>Thanks to all these contributors who worked on this project:</p>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {contributors.map(contributor => (
              <li key={contributor.id}>
                <a href={contributor.html_url}>
                  <img
                    src={contributor.avatar_url}
                    width="100px"
                    alt={`Avatar of ${contributor.login}`}
                  />
                  <br />
                  {contributor.login}
                </a>
                <br />
                <a href={`https://github.com/opengento/gatsbylius/commits?author=${contributor.login}`} alt={`Contributions of ${contributor.login}`}>
                  ({contributor.contributions} contributions)
                  </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Layout>
  )
}

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
