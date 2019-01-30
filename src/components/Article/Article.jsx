import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'

const Wrapper = styled.article`
  margin-bottom: ${rhythm(2)};
  position: relative;
`

const ArticleHeader = styled.header`
  margin-bottom: ${rhythm(0.25)};
`
const Header = styled.h2`
  font-size: ${rhythm(1.1)};
  margin-bottom: ${rhythm(0.8)};
  line-height: ${rhythm(1.6)};
`

const Date = styled.p`
  ${scale(-1 / 5)};
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-0.6)};
`

class Article extends React.Component {
  render() {
    const { node } = this.props
    const title = node.frontmatter.title || node.fields.slug
    const date = node.frontmatter.date
    const slug = node.fields.slug
    const description = node.excerpt

    return (
      <Wrapper>
          <ArticleHeader>
              <Link to={ slug }><Header>{ title }</Header></Link>
              <Link to={ slug }><Date>{ date }</Date></Link>
          </ArticleHeader>
          <Link to={ slug }><p dangerouslySetInnerHTML={{ __html: description }} /></Link>
      </Wrapper>
    )
  }
}

export default Article
