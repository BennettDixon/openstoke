/**
 * getStaticPathsFromSlugs - gets static paths to be used in getStaticPaths function from tree.
 *
 * @slugs slugs for paths
 */
const getStaticPathsFromSlugs = ({ slugs }) => {
  try {
    /*const paths = files.map(file => {
        const builtSlug = getSlug({ path: file, rootDir: 'galaxy' })
        const slug = [...builtSlug.split('/')]
  
        return {
          params: {
            slug
          }
        }
      })*/
    const paths = slugs.map(slug => {
      const slugArr = [...slug.split('/')]

      return {
        params: {
          slug: slugArr
        }
      }
    })
    return paths
  } catch (error) {
    console.error('Error occured in getStaticPathsFromSlugs...', error)
    throw error
  }
}

export default getStaticPathsFromSlugs
