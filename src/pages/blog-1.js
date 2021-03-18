import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import "../styles/style.css"
import "../styles/bootstrap-grid.min.css"
import "../styles/animsition.min.css"
import Layout from "../components/Layouts"

const Blog1 = () => {
  return (
    <Layout>
      <div class="spacer">
        <article class="single">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                <div class="mar-top-lg">
                  <span class="time">March 5</span>
                  <h2 class="article-title">Save your eyes from eyestrain.</h2>
                  <p>Best fonts for your terminal.</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="article-content-image">
                  <img
                    src="../img/blog/blog-1.jpg"
                    alt="Save your eyes from eyestrain."
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                <p>
                  As developers, we stare at code all day. Making sure that code
                  is presented in a legible and clear format is table stakes for
                  productive coding. What are some great monospaced fonts aimed
                  at displaying code?
                </p>
                <ul>
                  <li>
                    <b>
                      <a
                        href="https://rubjo.github.io/victor-mono/"
                        target="_blank"
                      >
                        Victor Mono
                      </a>
                    </b>
                    <p>
                      This font comes with font ligatures as well as
                      “semi-connected cursive italics”. Some developers prefer
                      to customize their IDE’s to display comments in this
                      cursive style as a way of differentiating the text from
                      code.
                    </p>
                  </li>
                  <li>
                    <b>
                      <a
                        href="https://fonts.google.com/specimen/Ubuntu+Mono?preview.text_type=custom"
                        target="_blank"
                      >
                        Ubuntu Mono
                      </a>
                    </b>
                    <p>
                      Ubuntu Mono is a monospaced typeface commissioned by
                      Canonical (creators of Ubuntu Linux) to complement the
                      look and feel of their Linux distribution.
                    </p>
                  </li>
                  <li>
                    <b>
                      <a
                        href="https://fonts.google.com/specimen/Inconsolata?preview.text_type=custom#standard-styles"
                        target="_blank"
                      >
                        Inconsolata
                      </a>
                    </b>
                    <p>
                      Another free font with font ligatures designed for a great
                      coding experience.
                    </p>
                  </li>
                  <li>
                    <b>
                      <a
                        href="https://github.com/tonsky/FiraCode"
                        target="_blank"
                      >
                        Fira Code
                      </a>
                    </b>
                    <p>
                      It’s incredibly easy to get started with and incorporate
                      with VS Code, and includes some pretty sweet font
                      ligatures!
                    </p>
                  </li>
                  <li>
                    <b>
                      <a href="https://sourcefoundry.org/hack/" target="_blank">
                        Hack
                      </a>
                    </b>
                    <p>
                      This one is built by Source Foundry and the demo page does
                      a wonderful job explaining its benefits.
                    </p>
                  </li>
                  <li>
                    <b>
                      <a href="https://input.djr.com/" target="_blank">
                        Input
                      </a>
                    </b>
                    <p>
                      Input is only free for private use so you won’t be able to
                      use it to style code blocks on your website, but it looks
                      pretty great in your IDE.
                    </p>
                  </li>
                  <li>
                    <b>
                      <a
                        href="https://fonts.google.com/specimen/Source+Code+Pro"
                        target="_blank"
                      >
                        Source Code Pro
                      </a>
                    </b>
                    <p>
                      Source Code Pro was designed “to work well in user
                      interface (UI) environments”, and the designer also
                      created a sans-serif companion font “Source Sans.”
                    </p>
                  </li>
                  <li>
                    <b>
                      <a
                        href="https://fonts.google.com/specimen/Anonymous+Pro?preview.text_type=custom"
                        target="_blank"
                      >
                        Anonymous Pro
                      </a>
                    </b>
                    <p>
                      Anonymous Pro is designed as a coding font with a few
                      specific improvements over others in mind: Characters that
                      could be mistaken for each other like 0 (zero) vs O
                      (capital O) are intentionally differentiated, and the font
                      is built to work well down to very small sizes.
                    </p>
                  </li>
                </ul>
                <p>
                  All fonts were choosen only if they were Monospaced and also
                  were free to use on all types of systems.
                </p>
              </div>
            </div>
            <div class="next-article">
              <div class="row">
                <div class="col-lg-8 offset-lg-2 col-md-12">
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
  )
}

export default Blog1
