---
slug: second-blog
title: Second Blog
date: 2021-03-19T11:34:23.984Z
description: "Crazy "
thumbnail: https://d33wubrfki0l68.cloudfront.net/963cfc0e31cde983618382c986292dd045f5b4bb/d7ee1/img/blog/blog-2-cover.jpg
---
<!--StartFragment-->

If you're not familiar with GraphQL, this may seem slightly confusing, but you can break down what's going down here piece by piece.

*Note: To learn more about GraphQL, consider this [excellent resource](https://www.howtographql.com/)*

The underlying query name `BlogPostByPath` (note: these query names need to be unique!) will be injected with the current path, e.g. the specific blog post we are viewing. This path will be available as `$path` in your query. For instance, if you were viewing your previously created blog post, the path of the file that data will be pulled from will be `/hello-world`.

![](/static/img/blog-3-1.jpg)

`markdownRemark` will be the injected property available via the prop `data`, as named in the GraphQL query. Each property you pull via the GraphQL query will be available under this `markdownRemark` property. For example, to access the transformed HTML, you would access the `data` prop via `data.markdownRemark.html`.

`frontmatter`, is of course the data structure we provided at the beginning of the Markdown file. Each key you define there will be available to be injected into the query.

At this point, you have a bunch of plugins installed to load files off of disk, transform Markdown to HTML, and other utilities. You have a single, lonely Markdown file that will be rendered as a blog post. Finally, you have a React template for blog posts as well as a wired up GraphQL query to query for a blog post and inject the React template with the queried data. Next up: programmatically creating the necessary static pages (and injecting the templates) with Gatsby's Node API. Let's get down to it.

An important note to make at this point is that the GraphQL query takes place at **build** time. The component is injected with the `data` prop that is seeded by the GraphQL query. Unless anything dynamic (e.g. logic in `componentDidMount`, state changes, etc.) occurs, this component will be pure, rendered HTML generated via the React rendering engine, GraphQL, and Gatsby!

## Creating the static pages

<!--EndFragment-->