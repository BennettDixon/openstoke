import Link from 'next/dist/client/link'
import { Footer, GitHub, Header, PostSnippet, SEO } from 'components'
import siteConfig from 'site.config'
import { containers } from 'ui-kit'
import * as S from './styles'

export default function HomePage ({ allMdx }) {
  return (
    <containers.PrimaryWrap>
      <SEO />
      <Header />
      <containers.MainContent>
        <S.H1>Welcome to openstoke</S.H1>
        {/* we will remove the below, it is just for now as we develop */}
        <p>
          We are dedicated to creating open-source, reliable, and concise
          information regarding one-wheeled balance-vehicle devices. If you'd
          like to learn more about this project in general, or contribute in
          some manner check out our <Link href='/about'>about page</Link> to
          learn more.
        </p>

        <S.FeatureList>
          <S.ListItem>
            Create top level routes from .mdx files organized however you want.
          </S.ListItem>
          <S.ListItem>
            Statically generated routes using Next’s `getStaticPaths`.
          </S.ListItem>
          <S.ListItem>Supports frontmatter (thanks to gray-matter).</S.ListItem>
        </S.FeatureList>
        <S.GitHubButton href={`https://github.com/${siteConfig.gitHubProject}`}>
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
        </S.PostList>
        <Footer />
      </containers.MainContent>
    </containers.PrimaryWrap>
  )
}
