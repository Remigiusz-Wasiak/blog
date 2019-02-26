import React from 'react'
import {Link} from 'gatsby'
import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Tags from '../Tags/Tags'

const Wrapper = styled.article`
  &:not(:last-of-type) {
    margin-bottom: ${rhythm(2)};
  }
  position: relative;
`

const ArticleHeader = styled.header`
  margin-bottom: ${rhythm(0.25)};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  
  @media(max-width: 535px) {
    flex-direction: column;
  }
`
const HeaderLink = styled(Link)`
  flex: 5;
`

const Header = styled.h2`
  font-size: ${rhythm(1.1)};
  margin-bottom: ${rhythm(0.5)};
  line-height: ${rhythm(1.6)};
`

const Date = styled(Link)`
  ${scale(-1 / 5)};
  margin-bottom: ${rhythm(0.3)};
  flex: 1;
  text-align: end;
  line-height: ${rhythm(1.6)};
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
    const tags = articleData.node.frontmatter.tags ? articleData.node.frontmatter.tags : null


    return (
      <Wrapper>
        <ArticleHeader>
          <HeaderLink to={ slug }><Header>{ title }</Header></HeaderLink>
          <Date to={ slug }>{ date }</Date>
        </ArticleHeader>
        { sizes && (
          <Link to={ slug }>
            <StyledArticleImg
              sizes={ sizes }
            />
          </Link>
        )}
        <Link to={ slug }><p dangerouslySetInnerHTML={{ __html: description }} /></Link>
        { tags && <Tags tags={tags}/> }
      </Wrapper>
    )
  }
}

export default Article
