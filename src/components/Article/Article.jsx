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
  ${scale(0.7)};
  margin-bottom: ${rhythm(0.25)};
`

const Date = styled.p`
  ${scale(-1 / 8)};
  margin-bottom: ${rhythm(0.25)};
`

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
            <Header>{ title }</Header>
            <Date>{ date }</Date>
          </ArticleHeader>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <StyledLink to={ slug }></StyledLink>
      </Wrapper>
    )
  }
}

export default Article
