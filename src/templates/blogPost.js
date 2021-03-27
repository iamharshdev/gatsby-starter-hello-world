import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layouts"

const Template = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, description, date } = data.markdownRemark.frontmatter
  console.log(data)
  return (
    <div>
      <Layout>
        <div className="spacer">
          <article className="single">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <div className="mar-top-lg">
                    <span className="time">{date}</span>
                    <h2 className="article-title">{title}</h2>
                    <p>{description}</p>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="article-content-image">
                    <img
                      src="../img/blog/blog-1.jpg"
                      alt="Save your eyes from eyestrain."
                    />
                  </div>
                </div>
              </div>
              <div className="row"></div>
              <div className="next-article">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 col-md-12">
                    <p>Next Article</p>
                    <h2>
                      <Link to="/blog-2">Master frost gradients.</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Layout>
    </div>
  )
}

export const postQuery = graphql`
  query BlogDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD-MM-YYYY")
        description
        title
      }
    }
  }
`

export default Template
