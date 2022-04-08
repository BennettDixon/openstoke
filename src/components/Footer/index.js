import * as S from './styles'
import siteConfig from 'site.config'

const Footer = props => {
  const projectURL = `https://github.com/${siteConfig.gitHubProject}`
  return (
    <S.Footer>
      <S.Copyright>
        © {new Date().getFullYear()} {siteConfig.copyrightAuthor}
      </S.Copyright>
      <S.LicenseContainer>
        <S.License>
          Licensed under
          <S.LicenseLink href={`${projectURL}/blob/main/LICENSE.md`}>
            MIT license
          </S.LicenseLink>
        </S.License>
        <S.Social>
          <S.A href={projectURL}>
            <S.StyledGitHub />
          </S.A>
        </S.Social>
      </S.LicenseContainer>
    </S.Footer>
  )
}
export default Footer
