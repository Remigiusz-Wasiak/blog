import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo.jsx'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'

class OBlogu extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Strona o blogu" />
        <div>
          <p>
            Cześć! Mam na imię Remigiusz. Jestem mężem, synem, bratem i powoli
            zbliżam się do 30-tki :). Mieszkam w Warszawie. Od początku 2018
            roku zawodowo zajmuję się programowaniem w JavaScript i tworzeniem
            stron internetowych. Wcześniej pracowałem w kilku innych branżach,
            ale ostatecznie to w programowaniu odnalazłem coś, co daje mi
            poczucie spełnienia.
          </p>
          <p>
            Tworzę ten blog dla siebie, ale również dla wszystkich, których
            interesuje tematyka programowania w JavaScript. Jeżeli szukasz
            odpowiedzi na któreś z poniższych pytań:
          </p>
          <ul>
            <li>Czy programowanie jest dla mnie?</li>
            <li>Jak uczyć się programowania?</li>
            <li>Jak planować naukę i projekty?</li>
            <li>Gdzie szukać wartościowych źródeł do nauki programowania?</li>
            <li>Jak zdobyć pierwszą pracę jako programista po przebranżowieniu?</li>
            <li>Jak prowadzić swój rozwój zawodowy?</li>
          </ul>

          <p>
            to serdecznie witam Cię na moim blogu. Będę starał się tu pokazywać
            moją drogę rozwoju, ale również przekazywać porady dla osób mniej
            doświadczonych.
          </p>
        </div>
      </Layout>
    )
  }
}

export default OBlogu

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
