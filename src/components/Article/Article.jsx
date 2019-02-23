import React from 'react'
import {Link} from 'gatsby'
import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.article`
  margin-bottom: ${rhythm(3)};
  position: relative;
`

const ArticleHeader = styled.header`
  margin-bottom: ${rhythm(0.25)};
`
const Header = styled.h2`
  font-size: ${rhythm(1.1)};
  margin-bottom: ${rhythm(0.5)};
  line-height: ${rhythm(1.6)};
`

const Date = styled.p`
  ${scale(-1 / 5)};
  margin-bottom: ${rhythm(0.3)};
  margin-top: ${rhythm(-0.6)};
`

const StyledArticleImg = styled(Img)`
  margin: 0 -${rhythm(1)} ${rhythm(1)};
`

class Article extends React.Component {
  render() {
    const { articleData } = this.props
    const title = articleData.node.frontmatter.title
    const date = articleData.node.frontmatter.date
    const slug = articleData.node.fields.slug
    const description = articleData.node.excerpt
    const sizes = articleData.node.frontmatter.heroImg ? articleData.node.frontmatter.heroImg.childImageSharp.fluid : null


    return (
      <Wrapper>
        <ArticleHeader>
            <Link to={ slug }><Header>{ title }</Header></Link>
            <Link to={ slug }><Date>{ date }</Date></Link>
        </ArticleHeader>
        { sizes && (
          <Link to={ slug }>
            <StyledArticleImg
              sizes={ sizes }
            />
          </Link>
        )}
        <Link to={ slug }><p dangerouslySetInnerHTML={{ __html: description }} /></Link>
      </Wrapper>
    )
  }
}

export default Article
