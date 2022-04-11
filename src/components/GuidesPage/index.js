import React from 'react'
import { withRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import { Guides, Footer, Header, SEO } from 'components'
import * as components from 'components'
import { containers } from 'ui-kit'
import * as S from './styles'

class GuidesPageUnwrapped extends React.Component {
  state = {
    logsEntered: false,
    previouslyEntered: false
  }

  handleLogsEntered = async () => {
    await this.setState({ logsEntered: true })
    await setTimeout(() => this.setState({ previouslyEntered: true }), 1250)
  }

  handleGoBack = async () => {
    const { router } = this.props
    await this.setState({ hidingMdx: true })
    await setTimeout(async () => {
      await router.push(`/guides`)
      await this.setState({ hidingMdx: false })
    }, 1000)
  }

  render () {
    /* allMdx is provided by getStaticProps, using our slug path it returns only the notes. */
    const {
      guidesTree,
      treeNode,
      allGuides,
      frontMatter,
      mdxHtml,
      router
    } = this.props
    const { logsEntered, previouslyEntered, hidingMdx } = this.state
    const { slug } = router?.query

    console.log('guides got...', this.props)

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    const showingMDX = frontMatter && mdxHtml
    return (
      <containers.PrimaryWrap>
        <SEO />

        {!showingMDX && <Header />}

        <containers.MainContent>
          {frontMatter && mdxHtml ? (
            <S.MDXContainer hidingMdx={hidingMdx} enteringMdx={!hidingMdx}>
              <S.StyledExit
                desc='Button to exit note'
                onClick={this.handleGoBack}
                tabIndex='0'
              />
              <MDXProvider components={components}>
                <S.MDXWrap dangerouslySetInnerHTML={{ __html: mdxHtml }} />
              </MDXProvider>
            </S.MDXContainer>
          ) : (
            <>
              <S.HideOnEntry hasEntered={false}>
                <S.H1>Guides</S.H1>
                <S.Text>
                  Welcome to the guides section of the site. Here you can find
                  guides written & verified by our community to assist you with
                  your projects. Features like tagging + search coming soon!
                  <br />
                  <strong>(this page is currently in beta)</strong>
                </S.Text>
              </S.HideOnEntry>
              <S.Spacer>
                <Guides guides={allGuides} />
              </S.Spacer>
            </>
          )}
        </containers.MainContent>
        {!showingMDX && <Footer />}
      </containers.PrimaryWrap>
    )
  }
}

const GuidesPage = withRouter(GuidesPageUnwrapped)

export { GuidesPage }
export default GuidesPage
