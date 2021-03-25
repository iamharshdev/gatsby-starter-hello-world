import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"
        />
        <meta name="theme-color" content="#8cc972" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <title>CodeGrain</title>
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          content="We strategically design beautiful brands, websites, and digital products that actually work."
          name="description"
        />
        <meta content="We are CodeGrain." property="og:title" />
        <meta content="CodeGrain" property="og:site_name" />
        <meta
          content="We strategically design beautiful brands, websites, and digital products that actually work."
          property="og:description"
        />
        <meta content="./img/logo-square.png" property="og:image" />
        <meta
          content="https://codegrain.netlify.com/index.html"
          property="og:url"
        />
      </Helmet>
      <header>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <a class="logo smooth-leave" href="https://codegra.in/"></a>
              <nav>
                <ul>
                  <li>
                    <a class="smooth-leave" href="https://codegra.in/about">
                      About
                    </a>
                  </li>
                  <li>
                    <a class="smooth-leave" href="https://codegra.in/services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a class="smooth-leave" href="https://codegra.in/work">
                      Work
                    </a>
                  </li>
                  <li>
                    <Link class="smooth-leave" to="/">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <a class="smooth-leave" href="https://codegra.in/contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <span class="nav-toggle">Menu</span>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>
      <footer class="mar-top-lg">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-3 col-sm-12">
              <a class="logo smooth-leave" href="./index.html"></a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="footer-contacts">
                <div class="wrap">
                  <div class="address">
                    <p>
                      Pune
                      <br />
                      Maharashtra, IN
                    </p>
                  </div>
                  <a class="email" href="mailto:codegrain@gmail.com">
                    codegrain@gmail.com
                  </a>
                  <br />
                  <a class="phone" href="tel:+919022332201">
                    +91 902-233-2202
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-12">
              <div class="social-links">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://instagram.com/thecodegrain"
                    >
                      ig
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/codegrain"
                    >
                      tw
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.behance.net/CodeGrain"
                    >
                      Bē
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.youtube.com/channel/UCPKsb4U7x_4Ws-RsKQThVAA/featured"
                    >
                      yt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
