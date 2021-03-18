import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import "../styles/style.css"
import "../styles/bootstrap-grid.min.css"
import "../styles/animsition.min.css"
import Layout from "../components/Layouts"

const Blog2 = () => {
  return (
    <Layout>
      <div class="spacer">
        <article class="single">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                <div class="mar-top-lg">
                  <span class="time">March 9</span>
                  <h2 class="article-title">Master frost gradients.</h2>
                  <p>Create frost gradients with ease.</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                <p>
                  We are using Frost gradients in our recent posts and we love
                  them😍.
                </p>
                <ul>
                  <li>
                    <b>Step 1:</b>
                    <div class="article-content-image">
                      <img
                        src="../img/blog/blog-2-2.jpg"
                        alt="Master frost gradients."
                      />
                    </div>
                    <p>Add few circles and a rectangle in an art-board.</p>
                  </li>
                  <li>
                    <b>Step 2:</b>
                    <div class="article-content-image">
                      <img
                        src="../img/blog/blog-2-3.jpg"
                        alt="Master frost gradients."
                      />
                    </div>
                    <p>Mask out the rectangle to the circles.</p>
                  </li>
                  <li>
                    <b>Step 3:</b>
                    <div class="article-content-image">
                      <img
                        src="../img/blog/blog-2-4.jpg"
                        alt="Master frost gradients."
                      />
                    </div>
                    <p>Add gaussian blur of 90-100% to circles.</p>
                  </li>
                  <li>
                    <b>Step 4(Optional):</b>
                    <div class="article-content-image">
                      <img
                        src="../img/blog/blog-2-5.jpg"
                        alt="Master frost gradients."
                      />
                    </div>
                    <p>
                      Add an image overlay of a frost glass with overlay blend
                      with 40% opacity.
                    </p>
                  </li>
                  <li>
                    <b>Step 5(Not Optional😅):</b>

                    <p>Share the blog with your loved ones🤞.</p>
                  </li>
                </ul>
                <p>Do you like frosted gradients?</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="article-content-image">
                  <img
                    src="../img/blog/blog-2-1.jpg"
                    alt="Master frost gradients."
                  />
                </div>
              </div>
            </div>
            <div class="next-article">
              <div class="row">
                <div class="col-lg-8 offset-lg-2 col-md-12">
                  <p>Next Article</p>
                  <h2>
                    <Link to="/">None</Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default Blog2
