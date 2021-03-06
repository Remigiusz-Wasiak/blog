import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../../utils/typography'
import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  align-content: center;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  :hover {
    cursor: 'pointer'};
  }
  color: ${props => props.disabled ? 'rgba(211,211,211, 0.8)' : 'inherit'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`

class MainPaginantion extends React.Component {
    render() {
        const { group, index, first, last, pageCount } = this.props.data
        const previousPage = index - 1 <= 1 ? `` : (index - 1).toString()
        const nextPage = index + 1 > pageCount ? index.toString() : (index + 1).toString()

        const PaginationLink = (props) => {
            return <StyledLink disabled={props.disabled} to={props.url}>{props.text}</StyledLink>
        }

        return (
            <div>
                <hr/>
                <Wrapper>
                    <PaginationLink disabled={first} url={previousPage} text='« Poprzednia'></PaginationLink>
                    <PaginationLink disabled={last} url={nextPage} text='Następna »'></PaginationLink>
                </Wrapper>
            </div>
        )
    }
}

export default MainPaginantion
