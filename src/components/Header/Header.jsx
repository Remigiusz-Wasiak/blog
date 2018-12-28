import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


const Header = styled.header`
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

export default () => (
    <Header>
      <Link to="/">
        <Logo>RW</Logo>
      </Link>
      <List>
          <StyledLink>
              <Link to="/">Home</Link>
          </StyledLink>
          <StyledLink>
              <Link to="/about/">About</Link>
          </StyledLink>
          <StyledLink>
              <Link to="/contact/">Contact</Link>
          </StyledLink>
      </List>
    </Header>
)
