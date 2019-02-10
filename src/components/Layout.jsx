import React from 'react'
import { Link } from 'gatsby'
import Header from './Header/Header'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'
require("prismjs/plugins/line-numbers/prism-line-numbers.css")


const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(27)};
  padding: 0 ${rhythm(1)};
  box-shadow: 0px 2px 6px #ddd;
`
const Main = styled.main(props => ({
  minHeight: `calc(100vh - ${props.usedHeight}px)`,
  padding: `${rhythm(2)} 0 ${rhythm(1.5)}`,
}))

const Footer = styled.footer`
  ${scale(-1 / 5)}
  display: flex;
  justify-content: center;
  padding: ${rhythm(0.5)} 0;
  flex-direction: column;
  align-items: center;
`

const FooterCopies = styled.p`
  margin-bottom: ${rhythm(0.1)};
`

const FooterInfo = styled.p`
  font-size: ${rhythm(0.5)};
  margin-bottom: 0;
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
    const year = new Date().getFullYear()

    return (
      <Wrapper>
        <Header location={location} getRef={this.getRef} />
        <Main usedHeight={usedHeight}>{children}</Main>
        <Footer ref={el => (this.footer = el)}>
          <FooterCopies>© {year} Remigiusz Wasiak</FooterCopies>
          <FooterInfo><a href="/polityka-prywatnosci">Polityka prywatności</a> - <a href="/rss.xml">Subskrybuj RSS</a> - <a href="https://www.bloglovin.com/blog/19798443/?claim=2ztt93745nh">Bloglovin'</a></FooterInfo>
        </Footer>
      </Wrapper>
    )
  }
}

export default Layout
