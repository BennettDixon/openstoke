import { Footer, Header, SEO } from 'components'
import { containers } from 'ui-kit'
import * as S from './styles'

export default function HomePage ({ allMdx }) {
  return (
    <containers.PrimaryWrap>
      <SEO />
      <Header />
      <S.H1>Welcome to openstoke</S.H1>
      {/* we will remove the below, it is just for now as we develop */}
      <p>This site is in its very early stages -- check back soon!</p>

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
      <Footer />
    </containers.PrimaryWrap>
  )
}
