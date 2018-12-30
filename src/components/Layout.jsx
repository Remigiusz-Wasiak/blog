import React from 'react'
import { Link } from 'gatsby'
import Header from './Header/Header'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(26)};
  padding: 0 ${rhythm(3 / 4)};
`
const Main = styled.main(props => ({
  minHeight: `calc(100vh - ${props.usedHeight}px)`,
  padding: `${rhythm(1.5)} 0`,
}))

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

class Layout extends React.Component {
  state = {
    usedHeight: null,
  }

  componentDidMount() {
    this.setState({
      usedHeight: this.header.offsetHeight + this.footer.offsetHeight,
    })
  }

  getRef = ref => {
    this.header = ref
  }

  render() {
    const { location, children } = this.props
    const { usedHeight } = this.state

    return (
      <Wrapper>
        <Header location={location} getRef={this.getRef} />
        <Main usedHeight={usedHeight}>{children}</Main>
        <Footer ref={el => (this.footer = el)}>© 2018 Remigiusz Wasiak</Footer>
      </Wrapper>
    )
  }
}

export default Layout
