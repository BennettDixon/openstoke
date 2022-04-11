import fs from 'fs'
import matter from 'gray-matter'
import glob from 'fast-glob'

import * as components from 'components'
import { renderWithReact } from 'utils/renderWithReact'

// This glob is what will be used to generate static routes
const contentGlob = '_content/guides/**/*.mdx'

export async function getStaticPaths () {
  const files = glob.sync(contentGlob)

  const paths = files.map(file => {
    const split = file.split('/')
    const filename = split[split.length - 1]
    const slug = filename.replace('.mdx', '')

    return {
      params: {
        slug
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params: { slug } }) {
  const files = glob.sync(contentGlob)

  const fullPath = files.filter(item => {
    const split = item.split('/')
    const filename = split[split.length - 1]
    return filename.replace('.mdx', '') === slug
  })[0]

  const mdxSource = fs.readFileSync(fullPath)
  const { content, data } = matter(mdxSource)

  if (!fullPath) {
    console.warn('No MDX file found for slug')
  }

  const mdxHtml = await renderWithReact(content, { components })

  return {
    props: {
      mdxHtml,
      frontMatter: data || {}
    }
  }
}

export default components.GuidesPage
