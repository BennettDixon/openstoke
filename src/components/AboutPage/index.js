import { Footer, Header, GitHub, SEO } from 'components'
import { containers } from 'ui-kit'
import siteConfig from 'site.config'
import * as S from './styles'

export default function AboutPage ({ allMdx }) {
  return (
    <containers.PrimaryWrap>
      <SEO />
      <Header />
      <containers.MainContent>
        <S.H1>About</S.H1>
        <p>This site is in its very early stages -- check back soon!</p>
        <S.GitHubButton href={`https://github.com/${siteConfig.gitHubProject}`}>
          <GitHub />
          <span>View source on GitHub</span>
        </S.GitHubButton>
        <Footer />
      </containers.MainContent>
    </containers.PrimaryWrap>
  )
}
