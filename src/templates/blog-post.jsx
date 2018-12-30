import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'

const PostDate = styled.p`
  ${scale(-1 / 5)};
  display: block;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
`

const StyledHr = styled.hr`
  margin-bottom: ${rhythm(1)};
`

const ContentWrapper = styled.div`
  padding-bottom: ${rhythm(1)};
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin-left: 0;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`

const NavText = styled.span`
  ${scale(-1 / 5)}
  display: inline-block;
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 374px) {
    max-width: 120px;
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <article>
          <header>
            <h1>{post.frontmatter.title}</h1>
            <PostDate>{post.frontmatter.date}</PostDate>
          </header>
          <ContentWrapper dangerouslySetInnerHTML={{ __html: post.html }} />
          <StyledHr />
          <List>
            <li>
              {previous && (
                <StyledLink to={previous.fields.slug} rel="prev">
                    «&nbsp;<NavText>{previous.frontmatter.title}</NavText>
                </StyledLink>
              )}
            </li>
            <li>
              {next && (
                <StyledLink to={next.fields.slug} rel="next">
                    <NavText>{next.frontmatter.title}</NavText>&nbsp;»
                </StyledLink>
              )}
            </li>
          </List>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
