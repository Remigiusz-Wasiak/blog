import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo.jsx'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'

class PolitykaPrywatnosci extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Polityka prywatności" meta={[{name: 'robots', content: 'noindex, nofollow'}]}/>
        <div>
          <h2>Polityka prywatności</h2>
          <h3>1. Administrator danych</h3>
          <p>
            Administratorem danych osobowych na tej stronie jest Remigiusz Wasiak. W razie wątpliwości związanych z polityką prywatności lub bezpieczeństwem Twoich danych osobowych, możesz skontaktować się z administratorem pod adresem remigiusz.wasiak [małpa] gmail.com
          </p>
          <h3>2. Dane które udostępniasz na tej stronie</h3>
          <p>
            Strona remigiuszwasiak.pl zbiera w sposób automatyczny następujące informacje o użytkownikach:
          </p>
          <ul>
            <li>Rodzaj urządzenia</li>
            <li>Rodzaj i wersja przeglądarki</li>
            <li>Rodzaj systemu operacyjnego</li>
            <li>Rozdzielczość ekranu</li>
            <li>Adres IP</li>
          </ul>
          <h3>3. Jakie narzędzia i w jaki sposób pozyskują Twoje dane?</h3>
          <p>Dane zapisaywane są w postaci plików cookies i przechowywane są na Twoim urządzeniu. Podmioty trzecie korzystające z zapisanych plików cookies to:</p>
          <ul>
            <li>Google Analytics - w celu świadczenia usług związanych z ruchem i korzystaniem z Internetu</li>
            <li>Disqus - w celu obsługi działania komentarzy na blogu, jak również dla celów marketingowych</li>
          </ul>
          <h3>4. Zgoda na cookies</h3>
          <p>W przypadku braku Twojej zgody na umieszczanie plików cookies na urządzeniu z którego korzystasz, możesz je zablokować poprzez konfigurację swojej przeglądarki internetowej.</p>
        </div>
      </Layout>
    )
  }
}

export default PolitykaPrywatnosci

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
