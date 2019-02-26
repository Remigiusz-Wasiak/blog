import React from 'react'
import styled from 'styled-components'
import { rhythm } from '../../utils/typography'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import _ from 'lodash'

const StyledTags = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin-left: 0;
  margin-bottom: ${rhythm(0.3)};
`

const StyledLink = styled(Link)`
  display: inline-block;
  padding: ${rhythm(0.2)} ${rhythm(0.4)};
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  font-size: ${rhythm(0.5)};
  margin-bottom: ${rhythm(0.3)};
  
  &:not(:last-of-type) {
    margin-right: ${rhythm(0.2)};
  }
  
  &:hover {
    box-shadow:inset 1px 1px 3px #ddd;
  }
`

function Tags({ tags }) {
  return (
    <StyledTags>
      { tags && (
        tags.map(tag => {
          return <StyledLink key={tag} to={`/tag/${_.kebabCase(tag)}`}><b>#{tag}</b></StyledLink>
        })
      )}
    </StyledTags>
  )
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default Tags
