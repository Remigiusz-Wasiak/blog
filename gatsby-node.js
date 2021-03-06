const path = require(`path`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve(`./src/templates/blog-post.jsx`)
    const tagsPage = path.resolve(`./src/templates/tag.js`)
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
                  id
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    tags
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
          pageLength: 8, // This is optional and defaults to 10 if not used
          pathPrefix: '', // This is optional and defaults to an empty string if not used
          context: {}, // This is optional and defaults to an empty object if not used
        })

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges
        const tagsSet = new Set()
        posts.forEach((post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          if (post.node.frontmatter.tags) {
            post.node.frontmatter.tags.forEach(tag => {
              tagsSet.add(tag)
            })
          }

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

        // Create tag pages.
        const tagsList = Array.from(tagsSet)
        tagsList.forEach(tag => {
          createPage({
            path: `/tag/${_.kebabCase(tag)}/`,
            component: tagsPage,
            context: {
              tag
            }
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
