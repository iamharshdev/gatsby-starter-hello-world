import React from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

import "../styles/style.css"
import "../styles/bootstrap-grid.min.css"
import "../styles/animsition.min.css"
import Layout from "../components/Layouts"

export default function Home() {
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
          <div class="articles-list">
            <div class="row">
              <div class="col-md-4">
                <article>
                  <Link class="smooth-leave" to="/blog-1">
                    <div class="article-image">
                      <div class="icon-arrow"></div>
                      <img
                        src="./img/blog/blog-1-cover.jpg"
                        alt="Save your eyes."
                      />
                    </div>
                    <div class="article-text">
                      <h4 class="title">Save your eyes from eyestrain.</h4>
                      <p>Best fonts for your terminal.</p>
                      <span class="time">March 5</span>
                    </div>
                  </Link>
                </article>
              </div>
              <div class="col-md-4">
                <article>
                  <Link class="smooth-leave" to="/blog-2">
                    <div class="article-image">
                      <div class="icon-arrow"></div>
                      <img
                        src="./img/blog/blog-2-cover.jpg"
                        alt="Master frost gradients"
                      />
                    </div>
                    <div class="article-text">
                      <h4 class="title">Master frost gradients.</h4>
                      <p>Create frost gradients with ease.</p>
                      <span class="time">March 9</span>
                    </div>
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
