const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve(`./src/templates/blog-post.jsx`)
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    date(formatString: "DD-MM-YYYY")
                    title
                  }
                  excerpt(pruneLength: 230)
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        createPaginatedPages({
          edges: result.data.allMarkdownRemark.edges,
          createPage: createPage,
          pageTemplate: 'src/templates/index.js',
          pageLength: 4, // This is optional and defaults to 10 if not used
          pathPrefix: '', // This is optional and defaults to an empty string if not used
          context: {}, // This is optional and defaults to an empty object if not used
        })

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges
        posts.forEach((post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
