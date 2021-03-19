import React from "react"
import { Link, graphql } from "gatsby"

import "../styles/style.css"
import "../styles/bootstrap-grid.min.css"
import "../styles/animsition.min.css"
import Layout from "../components/Layouts"

const Home = ({ data }) => {
  return (
    <Layout>
      <div class="spacer">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div class="page-intro mar-top-lg">
                <h1 class="page-title">Blog</h1>
                <p>Sharing super ideas in simple, minimal & elegant way.</p>
              </div>
            </div>
          </div>
          {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id}>
              <div class="articles-list">
                <div class="row">
                  <div class="col-md-4">
                    <article>
                      <Link
                        class="smooth-leave"
                        to="{post.node.frontmatter.path}"
                      >
                        <div class="article-image">
                          <div class="icon-arrow"></div>
                          <img
                            src="./img/blog/blog-1-cover.jpg"
                            alt="Save your eyes."
                          />
                        </div>
                        <div class="article-text">
                          <h4 class="title">{post.node.frontmatter.title}</h4>
                          <p>{post.node.frontmatter.description}</p>
                          <span class="time">{post.node.frontmatter.date}</span>
                        </div>
                      </Link>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            description
            thumbnail
          }
        }
      }
    }
  }
`

export default Home
