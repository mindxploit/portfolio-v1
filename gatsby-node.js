/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allProjectsJson {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.allProjectsJson.nodes.forEach(node => {
    createPage({
      path: `/project/${node.slug}/`,
      component: require.resolve(`./src/templates/project.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
