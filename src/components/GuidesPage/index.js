import { Footer, Header, SEO } from 'components'
import { containers } from 'ui-kit'
import * as S from './styles'

export default function GuidesPage ({ allMdx }) {
  return (
    <containers.PrimaryWrap>
      <SEO />
      <Header />
      <S.H1>Guides</S.H1>
      <p>This site is in its very early stages -- check back soon!</p>
      <Footer />
    </containers.PrimaryWrap>
  )
}