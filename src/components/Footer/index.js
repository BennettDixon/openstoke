import * as S from './styles'
import { Width } from 'components'
import siteConfig from 'site.config'

const Footer = props => (
  <Width {...props}>
    <S.Footer>
      <S.Copyright>
        © {new Date().getFullYear()} {siteConfig.copyrightAuthor} - Licensed
        under MIT license
      </S.Copyright>
      <S.Social>
        <S.A href={`https://github.com/${siteConfig.gitHubProject}`}>
          <S.StyledGitHub />
        </S.A>
      </S.Social>
    </S.Footer>
  </Width>
)

export default Footer
