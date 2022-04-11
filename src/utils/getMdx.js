import fs from 'fs'
import matter from 'gray-matter'

import getSlug from './getSlug'

/* note if there is a file or directory with an identical name it will cause issues */
const ROOT_NOTES_DIR = 'galaxy'

const getMdx = (file, rootDir) => {
  const slug = getSlug({ path: file, rootDir: rootDir || ROOT_NOTES_DIR })

  const mdxSource = fs.readFileSync(file)
  const { data } = matter(mdxSource)

  return {
    slug,
    frontMatter: data
  }
}

export default getMdx
