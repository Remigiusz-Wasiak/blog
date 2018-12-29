import React from 'react'
import { Link } from 'gatsby'
import Header from './Header/Header'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(26)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <Wrapper>
        <Header location={location} />
        {children}
        <footer>
          © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Wrapper>
    )
  }
}

export default Layout
