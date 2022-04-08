import { SEO, Header } from 'components'
import { containers } from 'ui-kit'
import * as S from './styles'

export default function HomePage ({ allMdx }) {
  return (
    <containers.PrimaryWrap>
      <SEO />
      <Header />
      <S.Main>
        <S.H1>Welcome to openstoke</S.H1>
        {/* we will remove the below, it is just for now as we develop */}
        <p>This site is in its very early stages -- check back soon!</p>
        <p>
          We are dedicated to creating reliable & easily accessible information
          regarding open-source, one-wheeled, balance-vehicle devices. This
          project is an ongoing open-source website. If you'd like to contribute
          to the wiki (coming soon), create a guide (coming soon), or anything
          else. Please check out our discord section (coming soon).
        </p>
        {/*<S.FeatureList>
          <S.ListItem>
            Create top level routes from .mdx files organized however you want.
          </S.ListItem>
          <S.ListItem>
            Statically generated routes using Next’s `getStaticPaths`.
          </S.ListItem>
          <S.ListItem>Supports frontmatter (thanks to gray-matter).</S.ListItem>
        </S.FeatureList>
        <S.GitHubButton href={githubUrl}>
          <GitHub />
          <span>View source on GitHub</span>
        </S.GitHubButton>
        <S.H2>Featured posts</S.H2>
        <S.PostList>
          {allMdx.map(item => (
            <S.PostListItem key={item.slug}>
              <PostSnippet {...item} />
            </S.PostListItem>
          ))}
          </S.PostList>*/}
      </S.Main>
      <S.StyledFooter />
    </containers.PrimaryWrap>
  )
}
