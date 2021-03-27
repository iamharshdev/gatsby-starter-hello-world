import React from "react"
import { Link, graphql } from "gatsby"

import "../styles/style.css"
import "../styles/bootstrap-grid.min.css"
import "../styles/animsition.min.css"
import Layout from "../components/Layouts"

const Home = ({ data }) => {
  const blogs = data.allMarkdownRemark.nodes

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
              {blogs.map(blog => (
                <div key={blog.frontmatter.id}>
                  <article className="mr-3">
                    <Link
                      to={"/" + blog.frontmatter.slug}
                      key={blog.id.toString()}
                    >
                      <div className="article-image">
                        <div className="icon-arrow"></div>
                        <img
                          src={blog.frontmatter.thumbnail}
                          alt="Blog post thumbnail"
                        />
                      </div>
                      <div className="article-text">
                        <h4 className="title">{blog.frontmatter.title}</h4>
                        <p>{blog.frontmatter.description}</p>
                        <span className="time">{blog.frontmatter.date}</span>
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
      nodes {
        frontmatter {
          description
          slug
          title
          thumbnail
          date(formatString: "DD-MM-YYYY")
        }
        id
      }
    }
  }
`

export default Home
