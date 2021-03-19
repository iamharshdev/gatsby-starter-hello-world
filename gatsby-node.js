const path = require("path")

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { creatPage } = boundActionCreators

  const postTemplate = path.resolve("src/templates/blogPost.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              title
              date
              description
              thumbnail
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownremarks.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}
