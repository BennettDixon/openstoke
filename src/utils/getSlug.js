const getSlug = ({ path, rootDir }) => {
  const split = path.split('/')

  let buildMode = false
  let relativePath = []
  split.forEach(pathEntry => {
    if (buildMode) {
      relativePath.push(pathEntry)
    }

    if (pathEntry === rootDir) {
      buildMode = true
    }
  })

  /* replace filename, removing extension */
  const item = relativePath[relativePath.length - 1]

  relativePath[relativePath.length - 1] = item?.replace('.mdx', '')

  return relativePath.join('/')
}

export default getSlug
