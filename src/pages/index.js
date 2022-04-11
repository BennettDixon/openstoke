import glob from 'fast-glob'

import { HomePage } from 'components'
import getMdx from 'utils/getMdx'
import { getSlugTree } from 'utils'

export const globPath = '_content/guides/**/*.mdx'
import { globPath as guidesGlobPath } from './guides'
console.log('GalaxyGlobPAth...', guidesGlobPath)
async function getGalaxyItems () {
  const guidesFiles = glob.sync(guidesGlobPath)

  const allMdx = guidesFiles.map(file => getMdx(file))

  const { tree } = getSlugTree({
    files: guidesFiles,
    startDir: '_content/guides'
  })

  const orderedByDate = allMdx.sort((a, b) => {
    return new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
  })

  return {
    allGalaxyItems: orderedByDate,
    guidesTree: tree
  }
}

export async function getStaticProps () {
  const files = glob.sync(globPath)

  const allMdx = files.map(file => getMdx(file, 'guides'))

  const { tree } = getSlugTree({ files, startDir: '_content/guides' })

  const orderedByDate = allMdx.sort((a, b) => {
    return new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
  })

  const guidesItems = await getGalaxyItems()

  return {
    props: {
      allLogs: orderedByDate,
      logsTree: tree,
      ...guidesItems
    }
  }
}

export default HomePage
