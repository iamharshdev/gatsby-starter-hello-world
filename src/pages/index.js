import React from "react"
import { Link, graphql } from "gatsby"

import "../styles/style.css"
import "../styles/bootstrap-grid.min.css"
import "../styles/animsition.min.css"
import Layout from "../components/Layouts"

const Home = ({ data }) => {
  return (
    <Layout>
      <div className="spacer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div className="page-intro mar-top-lg">
                <h1 className="page-title">Blog</h1>
                <p>Sharing super ideas in simple, minimal & elegant way.</p>
              </div>
            </div>
          </div>

          <div className="articles-list">
            <div className="grids">
              {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id}>
                  <article className="mr-3">
                    <Link
                      className="smooth-leave"
                      to="{post.node.frontmatter.path}"
                    >
                      <div className="article-image">
                        <div className="icon-arrow"></div>
                        <img
                          src={post.node.frontmatter.thumbnail}
                          alt="Save your eyes."
                        />
                      </div>
                      <div className="article-text">
                        <h4 className="title">{post.node.frontmatter.title}</h4>
                        <p>{post.node.frontmatter.description}</p>
                        <span className="time">
                          {post.node.frontmatter.date}
                        </span>
                      </div>
                    </Link>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD-MM-YYYY")
            description
            thumbnail
          }
        }
      }
    }
  }
`

export default Home
