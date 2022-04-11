import glob from 'fast-glob'

import contentGlob from './contentGlob'

/*
export const getSlugForFilePath = path => {
  const split = path.split('/')
  const filename = split[split.length - 1]
  const slug = filename.replace('.mdx', '').replace('.md', '')
  return slug
}

export const getContent = () => {
  const files = glob.sync(contentGlob)

  return files.map(item => ({
    filepath: item,
    slug: getSlugForFilePath(item)
  }))
}

const content = getContent()

export const getFilePathForSlug = slug => {
  return content.filter(item => item.slug === slug)[0].filepath
}*/

import getMdx from './getMdx'
import getSlug from './getSlug'
import { getSlugTree, getTreeNode } from './slugTree'
import getStaticPathsFromSlugs from './getStaticPathsFromSlugs'
import { renderWithReact } from './renderWithReact'

export {
  getMdx,
  getSlug,
  getSlugTree,
  getTreeNode,
  getStaticPathsFromSlugs,
  renderWithReact
}
