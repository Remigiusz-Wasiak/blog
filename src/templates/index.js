import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import MainPagination from '../components/Pagination/MainPagination'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'

const StyledHr = styled.hr`
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(1)};
`

class BlogIndex extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = pageContext.group

    return (
      <Layout location={ this.props.location } title={ siteTitle }>
        <SEO title="Strona główna" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug

          return <Article node={ node } key={ title } />
        })}
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
  }
`
