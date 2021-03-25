// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { data } = await graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             html
//             id
//             frontmatter {
//               title
//               date
//               description
//               thumbnail
//             }
//           }
//         }
//       }
//     }
//   `)

//   data.allMarkdownRemark.nodes.forEach(node => {
//     actions.createPage({
//       path: "/blog" + node.frontmatter.slug,
//       component: path.resolve("./src/templates/blogPost.js"),
//       context: { slug: node.frontmatter.slug },
//     })
//   })
// }
