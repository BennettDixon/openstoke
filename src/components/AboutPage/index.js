import { Footer, Header, SEO } from 'components'
import { containers } from 'ui-kit'
import * as S from './styles'

export default function AboutPage ({ allMdx }) {
  return (
    <containers.PrimaryWrap>
      <SEO />
      <Header />
      <containers.MainContent>
        <S.H1>About</S.H1>
        <p>This site is in its very early stages -- check back soon!</p>
        <Footer />
      </containers.MainContent>
    </containers.PrimaryWrap>
  )
}
