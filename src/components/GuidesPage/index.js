import React from 'react'
import { withRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import { Logs, Footer, Header, SEO } from 'components'
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
      logsTree,
      treeNode,
      allLogs,
      frontMatter,
      mdxHtml,
      router
    } = this.props
    const { logsEntered, previouslyEntered, hidingMdx } = this.state
    const { slug } = router?.query

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running

    return (
      <containers.PrimaryWrap>
        <SEO />

        {!(frontMatter && mdxHtml) && <Header />}

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
                <S.H2>Guides</S.H2>
                <S.Text>Under construction</S.Text>
              </S.HideOnEntry>
              <S.Spacer>
                <Logs logs={allLogs} />
              </S.Spacer>
            </>
          )}
        </containers.MainContent>
        <Footer />
      </containers.PrimaryWrap>
    )
  }
}

const GuidesPage = withRouter(GuidesPageUnwrapped)

export { GuidesPage }
export default GuidesPage
