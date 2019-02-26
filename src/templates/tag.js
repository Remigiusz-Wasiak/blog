import React from "react"
import PropTypes from "prop-types"

// Components
import { graphql } from "gatsby"
import SEO from "../components/seo";
import Article from "../components/Article/Article";
import Layout from "../components/Layout";

class Tag extends React.Component {

  render() {
    const { data, pageContext } = this.props
    const { tag } = pageContext
    const { edges } = data.allMarkdownRemark

    return (
      <Layout location={ this.props.location } title={`Tag - ${tag}`}>
        <SEO title={`Tag - ${tag}`} />
        { edges.map((edge) => {
          return <Article articleData={ edge } key={ edge.node.frontmatter.title } />
        }) }
      </Layout>
    )
  }
}

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tag

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD-MM-YYYY")
            tags
            heroImg {
              childImageSharp {
                fluid(maxWidth: 648) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(pruneLength: 230)
        }
      }
    }
  }
`
