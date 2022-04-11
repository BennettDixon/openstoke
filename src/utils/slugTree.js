import getMdx from 'utils/getMdx'

const getSplitpath = path => path.replace(/^\/|\/$/g, '').split('/')

/**
 * getSlugTree - returns a tree containing directory structure
 *
 * paths: paths to traverese, typically from a glob (fast-glob npm package)
 * startDir: start directory, should be full path e.g `/src/content`.
 *          Will remove this portion of the directory string from the slug.
 *          For example if you have /src/content/notes/test/test.mdx the slug would be notes/test/test rather than the full path
 *
 *
 * Return:
 * {
 *      parent: pointer [null if root, otherwise parent node],
 *      children: array of pointers [...childNodes],
 *      filepath: string [path of file],
 *      slug: string [route used in path, e.g 'React/Rendering/a-note']
 * }
 */

const getSlugTree = ({ files, startDir, fileExtension = '.mdx' }) => {
  const tree = {}
  const slugs = []
  let startSplit = startDir ? getSplitpath(startDir) : []

  files.forEach(path => {
    var splitpath = getSplitpath(path)
    if (startDir) {
      let newPath = []
      for (let i = 0; i < splitpath.length; i++) {
        const element = splitpath[i]
        if (i < startSplit.length && startSplit[i] === element) {
          continue
        }
        newPath.push(element)
      }
      splitpath = newPath
    }

    var ptr = tree
    let currentPath = []
    for (let i = 0; i < splitpath.length; i++) {
      const key = splitpath[i]

      currentPath.push(key)

      let slug = currentPath.join('/')
      let node = { name: key }
      if (i === splitpath.length - 1) {
        let newFile = key.replace(fileExtension, '')
        let shortSlug = currentPath.slice(0, currentPath.length - 1)
        shortSlug.push(newFile)
        slug = shortSlug.join('/')
        node.type = 'file'
        node.name = newFile
        node.slug = slug
        node.fullPath = path
        node.frontMatter = getMdx(path).frontMatter
        ptr[newFile] = ptr[newFile] || node
        ptr[newFile].children = ptr[newFile].children || {}
        ptr = ptr[newFile].children
      } else {
        node.type = 'directory'
        node.slug = slug

        ptr[key] = ptr[key] || node
        ptr[key].children = ptr[key].children || {}

        if (!ptr[key].frontMatter) {
          ptr[key].frontMatter = ptr[key].children?.index?.frontMatter || null
        }

        ptr = ptr[key].children
      }
      slugs.push(slug)
    }
  })

  return { tree, slugs }
}

/**
 * getTreeNode - gets a tree node for a tree built with getSlugTree
 *
 * path: directory path from root of tree (should be passed as src/content/galaxy/React/my-note.mdx for example )
 *
 * tree: tree to search  (should be generated from getSlugTree)
 *
 * ignoreErrors: (optional) if true it will report errors but continue execution.
 *                Defaults to false since this is typically used during build.
 *
 * Return: the node found, if no node is found an error is raised unless ignoreErrors === true
 */
const getTreeNode = ({ path, tree, ignoreErrors = false }) => {
  try {
    let ptr = tree
    let i = 0
    var splitpath = getSplitpath(path)

    /* if passed as /src/... instead of src/ this will be true, remove empty entry */
    if (splitpath[0] === '') splitpath.slice(1)

    for (let i = 0; i < splitpath.length; i++) {
      const node = ptr[splitpath[i]]

      if (node?.name === splitpath[splitpath.length - 1]) return node
      ptr = node?.children
    }
    throw new Error('No node found for path')
  } catch (error) {
    console.error(`Failed to find node for path ${path}`, error)
    if (!ignoreErrors) throw new Error(`Failed to find node for path ${path}`)
  }
}

export { getSlugTree, getTreeNode }
