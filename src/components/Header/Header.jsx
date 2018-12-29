import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 36rem;
  padding-bottom: 1.25rem;
`

const Logo = styled.h3`
  display: inline;
  text-shadow: none;
  background-image: none;
`

const List = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
`

const StyledLink = styled.li`
  margin-bottom: 0;
  margin-left: 1.25rem;
`

class Header extends React.Component {
  render() {
    const { location } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const aboutPath = `${rootPath}o-blogu`

    return (
      <StyledHeader>
        <Link to="/">
          <Logo>RW</Logo>
        </Link>
        <nav>
          <List>
            {location.pathname !== rootPath && (
              <StyledLink>
                <Link to="/">Start</Link>
              </StyledLink>
            )}
          </List>
        </nav>
      </StyledHeader>
    )
  }
}

export default Header
