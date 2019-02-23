import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'
import { DiscussionEmbed } from 'disqus-react'
import Img from 'gatsby-image'

const StyledMainHeader = styled.h2`
  line-height: ${rhythm(1.6)};
  margin-bottom: ${rhythm(0.5)}
`

const PostDate = styled.p`
  ${scale(-1 / 5)};
  display: block;
  margin-bottom: ${rhythm(0.3)};
  margin-top: ${rhythm(-0.6)};
`

const StyledHr = styled.hr`
  margin-bottom: ${rhythm(1)};
`

const PostContainer = styled.article`
  padding-bottom: ${rhythm(2)}
`

const ContentWrapper = styled.div`
  padding-bottom: ${rhythm(1)};
`

const DisqusWrapper = styled.div`
  margin: -0.5rem;
`

const Navigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin-left: 0;
  margin-bottom: 0;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`

const NavText = styled.span`
  ${scale(-1 / 5)};
  display: inline-block;
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 374px) {
    max-width: 120px;
  }
`

const StyledPostImg = styled(Img)`
  margin: 0 -${rhythm(1)} ${rhythm(1)};
`

class BlogPostTemplate extends React.Component {
  render() {
    const { data } = this.props
    const post = data.markdownRemark
    const sizes = data.markdownRemark.frontmatter.heroImg ? data.markdownRemark.frontmatter.heroImg.childImageSharp.fluid : null
    const imageSrc = sizes ? sizes.src : ''
    const siteTitle = data.site.siteMetadata.title
    const { siteUrl } =  data.site.siteMetadata
    const { previous, next } = this.props.pageContext
    const disqusShortname = 'remigiusz-wasiak-blog'
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    }


    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title}
             description={post.excerpt}
             meta={[
               {name: 'og:image', content: `${siteUrl}${imageSrc}`},
               {name: 'twitter:card', content: 'summary_large_image'},
               {name: 'twitter:image', content: `${siteUrl}${imageSrc}`},
               {name: 'og:image:width', content: '648'},
               {name: 'og:image:height', content: '312'}]}/>
        <PostContainer>
          <header>
            <StyledMainHeader>{post.frontmatter.title}</StyledMainHeader>
            <PostDate>{post.frontmatter.date}</PostDate>
          </header>
          { sizes && (
            <StyledPostImg
              sizes={ sizes }
            />
          )}
          <ContentWrapper className='post' dangerouslySetInnerHTML={{ __html: post.html }} />
          <StyledHr />
          <Navigation>
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
          </Navigation>
        </PostContainer>
        <DisqusWrapper>
          <DiscussionEmbed shortname={ disqusShortname } config={ disqusConfig } />
        </DisqusWrapper>

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
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD-MM-YYYY")
        heroImg {
          childImageSharp {
            fluid(maxWidth: 648) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
