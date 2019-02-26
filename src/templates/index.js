import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import MainPagination from '../components/Pagination/MainPagination'
import SEO from '../components/seo'
import Article from '../components/Article/Article'

class BlogIndex extends React.Component {

  constructor() {
    super()

    this.getPaginatedArticleData.bind(this)
  }

  getPaginatedArticleData(node, data) {
    return data.allMarkdownRemark.edges.find((el) => {
      return el.node.id === node.id
    });
  }

  render() {
    const { data, pageContext } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = pageContext.group

    return (
      <Layout location={ this.props.location } title={ siteTitle }>
        <SEO title="Strona główna" />
        { posts.map(({ node }) => {
          const articleData = this.getPaginatedArticleData(node, data);
          const title = articleData.node.frontmatter.title || node.fields.slug

          return <Article articleData={ articleData } key={ title } />
        }) }
        <MainPagination data={ pageContext } />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
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
