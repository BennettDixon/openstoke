import glob from 'fast-glob'

import getMdx from 'utils/getMdx'
import { getSlugTree } from 'utils'
import { GuidesPage } from 'components'

export const globPath = '_content/guides/**/*.mdx'

export async function getStaticProps () {
  const files = glob.sync(globPath)

  const allMdx = files.map(file => getMdx(file, 'guides'))

  const { tree } = getSlugTree({ files, startDir: '_content/guides' })

  const orderedByDate = allMdx.sort((a, b) => {
    return new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
  })

  return {
    props: {
      allGuides: orderedByDate,
      guidesTree: tree
    }
  }
}

export default GuidesPage
